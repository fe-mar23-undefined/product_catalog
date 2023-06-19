import { CardLayout } from "../../components/CardLayout";
import { useGlobalContext, } from "../../context/GlobalContextProvider"
import { useCallback, useState, useEffect } from "react"
import { getSelectedPhones } from "../../api/phones";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { PhoneDetails } from "../../types/PhoneDetails";
import './FavouritesPage.scss';
import { CardDetails } from "../../components/CardDetails";


export const FavouritesPage = () => {
  const { phoneId } = useParams();
  const [selectedPhone, setSelectedPhone] = useState<PhoneDetails | null>(null)
  const [selectedPhones, setSelectedPhones] = useState<PhoneDetails[]>([])


  const loadSinglePhone = useCallback(async () => {
    try {
      if (phoneId) {
        const phones = await getSelectedPhones(phoneId)
        setSelectedPhones(phones)
        
        const selectedOne = selectedPhones.find(phone => phone.id === phoneId);

        if (selectedOne) {
          setSelectedPhone(selectedOne);
        }
      }
    } catch (error) {
      
    } 
  }, [phoneId])

  useEffect(() => {
    loadSinglePhone();
  }, [phoneId, loadSinglePhone])

  const { favourites } = useGlobalContext();
  return (
    <>
      <div className='favourites-page'>
        <div className="breadcrumbs">
          <div className="breadcrumbs__crumb">
            <Link to='/' className="breadcrumbs__crumb-link">
              <div className="breadcrumbs__crumb-link--home"></div>
            </Link>
          </div>
          <Breadcrumbs item={selectedPhone} />
        </div>
          <>
            <h1 className="heading--h1">Favourites</h1>
            <p className="favourites-page__amount">{favourites.length} items</p>
            {favourites.length > 0 &&
              (<div className="favourites-page__items">
                {favourites.map(favItem => <CardLayout phone={favItem} slug={'/phones/'} />)}
              </div>)
            }
          </>
      </div>
    </>
  )
}
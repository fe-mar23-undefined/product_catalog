import { CardLayout } from "../../components/CardLayout";
import { useGlobalContext, } from "../../context/GlobalContextProvider"
import { useCallback, useState, useEffect } from "react"
import { getOnePhone } from "../../api/phones";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { PhoneDetails } from "../../types/PhoneDetails";
import { CardDetailsDescription } from "../../components/CardDetailsDescription";
import './FavouritesPage.scss';


export const FavouritesPage = () => {
  const { phoneId } = useParams();
  const [selectedPhone, setSelectedPhone] = useState<PhoneDetails | null>(null)


  const loadSinglePhone = useCallback(async () => {
    try {
      if (phoneId) {
        const phone = await getOnePhone(phoneId)
        setSelectedPhone(phone)
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
        {phoneId && selectedPhone ? <CardDetailsDescription phone={selectedPhone} />
          :
          <>
            <h1 className="heading--h1">Favourites</h1>
            <p className="favourites-page__amount">{favourites.length} items</p>
            {favourites.length > 0 ?
              (<div className="favourites-page__items">
                {favourites.map(favItem => <CardLayout phone={favItem} slug={'/favourites/'} />)}
              </div>)
              : <p>I dont like anything</p>
            }
          </>}
      </div>
    </>
  )
}
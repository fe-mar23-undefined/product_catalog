import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react"
import { getOnePhone, getPhones } from "../../api/phones";
import { Phone } from "../../types/Phone";
import './PhonesPage.scss';
import { SelectSort } from "../../components/Select/SelectSort";
import { Select } from "../../components/Select/Select";
import { CardLayout } from "../../components/CardLayout";
import { Link, useLocation, useParams } from "react-router-dom";
import { CardDetailsDescription } from "../../components/CardDetailsDescription";
import { PhoneDetails } from "../../types/PhoneDetails";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const [hasError, setHasError] = useState(false);
  const [sortValue, setSortValue] = useState('Newest');
  const [perPageValue, setPerPageValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhone, setSelectedPhone] = useState<PhoneDetails | null>(null)
  const { phoneId } = useParams();

  const location = useLocation()

  console.log(location)
  const loadSinglePhone = useCallback(async () => {
    try {
      if (phoneId) {
        const phone = await getOnePhone(phoneId)
        setSelectedPhone(phone)
      }
    } catch (error) {
      setHasError(true);
    }
  }, [phoneId])

  useEffect(() => {
    loadSinglePhone();
  }, [phoneId, loadSinglePhone])


  const indexOfLastPhone = currentPage * perPageValue;
  const indexOfFirstPhone = indexOfLastPhone - perPageValue;
  const lastPage = Math.ceil(phones.length / perPageValue);

  const pages = (amount: number) => {
    const numberedPages = [];

    for (let i = 1; i <= amount; i += 1) {
      numberedPages.push(i);
    }

    return numberedPages;
  }


  const handleChangeSortValue = (option: string) => {
    setSortValue(option);
  }

  const handleChangePerPageValue = (option: string) => {
    if (option === 'All') {
      setPerPageValue(phones.length)
    } else {
      setPerPageValue(+option)
    }
    setCurrentPage(1);
  }

  const loadPhones = async () => {
    try {
      const loadedPhones = await getPhones();
      setPhones(loadedPhones);
      setPerPageValue(loadedPhones.length)
    } catch (error) {
      setHasError(true);
    }
  }

  useEffect(() => {
    loadPhones();
  }, []);

  const currentPhones = useMemo(() => {
    return phones.slice(indexOfFirstPhone, indexOfLastPhone);
  }, [indexOfFirstPhone, indexOfLastPhone, phones])

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage !== lastPage ? currentPage + 1 : currentPage)
  }

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage !== 1 ? currentPage - 1 : currentPage);
  }

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  }

  const visiblePhones = useMemo(() => {
    let phonesToSort = [...currentPhones];

    switch (sortValue) {
      case 'Newest':
        phonesToSort = phonesToSort
          .sort((phoneA, phoneB) => phoneB.year - phoneA.year);
        break;
      case 'Alphabetically':
        phonesToSort = phonesToSort
          .sort((phoneA, phoneB) => phoneA.name.localeCompare(phoneB.name));
        break;
      case 'Cheapest':
        phonesToSort = phonesToSort
          .sort((phoneA, phoneB) => phoneA.fullPrice - phoneB.fullPrice)
        break;
      default:
        break;
    }

    return phonesToSort;
  }, [sortValue, currentPhones])

  return (
    <>
      <div className='phones-page'>
        <div className="breadcrumbs">
          <div className="breadcrumbs__crumb">
            <Link to='/' className="breadcrumbs__crumb-link">
              <div className="breadcrumbs__crumb-link--home"></div>
            </Link>
          </div>
          <Breadcrumbs item={selectedPhone} />
        </div>
        {phoneId && selectedPhone ? <CardDetailsDescription phone={selectedPhone}/>
          :
        <>
        <h1 className='phones-page__title heading--h1'>Mobile phones</h1>
        <p className='phones-page__amount text'>{phones.length} models</p>
        <div className="pagination">
          <div className="pagination__sort">
            <p className="pagination__sort-text text--small">Sort by</p>
            <SelectSort 
              value={sortValue}
              onChangeSortValue={handleChangeSortValue}
            />
          </div>
          <div className="pagination__perPage">
            <p className="pagination__perPage-text text--small">Items on page</p>
            <Select 
              value={perPageValue} 
              onChangePerPageValue={handleChangePerPageValue}
              length={phones.length}
            />
          </div>
        </div>
        {!hasError
          ? 
          <div className="phones">
            {visiblePhones.map(phone => 
            <CardLayout 
              phone={phone}
              slug={"/phones/"}
              key={phone.phoneId}
            />)}
            </div>
          
          : <p>Error</p>
        }
        {pages(lastPage).length > 1 && <ul className="pagination__list">
          <li className="pagination__list-item pagination__list-prev">
            <a
              className={classNames('pagination__list-link', {
                disabled: currentPage === 1,
              })}
              href='#/phones'
              onClick={handlePrevPage}
            >
              <svg className="pagination__list-img--prev" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path className="pagination__list-img--prev--disabled" fillRule="evenodd" clipRule="evenodd" d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z" fill="currentColor" />
              </svg>
            </a>
          </li>
          {pages(lastPage).map(page => (
            <li className="pagination__list-item" key={page}>
              <a
                className={classNames('pagination__list-link', {
                  'pagination__list-link--is-current': currentPage === page,
                })}
                href='#/phones'
                onClick={() => handleChangePage(page)}
              >
                {page}
              </a>
            </li>
          ))}
          <li className="pagination__list-item pagination__list-next"
          >
            <a
              className={classNames('pagination__list-link', {
                disabled: currentPage === lastPage,
              })}
              href='#/phones'
              onClick={handleNextPage}
            >
              <svg className="pagination__list-img--next" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path className="pagination__list-img--next--disabled " fillRule="evenodd" clipRule="evenodd" d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z" fill="currentColor" />
              </svg>
            </a>
          </li>
        </ul>
        }
        </>}
      </div>
    </>
  )
}
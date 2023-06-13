import classNames from "classnames";
import { useEffect, useMemo, useState } from "react"
import { getPhones } from "../../api/phones";
import { Phone } from "../../types/Phone";
import './PhonesPage.scss';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const [hasError, setHasError] = useState(false);
  const [sortValue, setSortValue] = useState('Newest');
  const [perPageValue, setPerPageValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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

  
  const handleChangeSortValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value);
  }
  
  const handleChangePerPageValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPageValue(+event.target.value)
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
      <h1>Mobile phones</h1>
      <p>{phones.length} models</p>
      <p>sort and pagination</p>
      <div className="pagination">
        <div className="sort">
          <p className="sort__text">Sort by</p>
          <select 
            className="sort__select"
            id="sortSelector"
            value={sortValue}
            onChange={handleChangeSortValue}
            >
              <option value="Newest">Newest</option>
              <option value="Alphabetically">Alphabetically</option>
              <option value="Cheapest">Cheapest</option>
            </select>
        </div>
        <div className="perPage">
          <p className="perPage__text">Items on page</p>
          <select 
            className="perPage__select"
            id="perPageSelector"
            value={perPageValue}
            onChange={handleChangePerPageValue}
            >
              <option value={`${phones.length}`}>All</option>
              <option value="16">16</option>
              <option value="8">8</option>
              <option value="4">4</option>
            </select>
        </div>
      </div>
      {!hasError 
        ? <div className="phones">
            {visiblePhones.map(phone => <div className="card" key={phone.id}>{phone.name} {phone.fullPrice} {phone.year}</div>)}
          </div>
        : <p>Error</p>
      }
      <ul>
        <li className={classNames('pagination__item', {
          disabled: currentPage === 1,
        })}
        >
          <a 
            className="pagination__link"
            href='#/phones'
            onClick={handlePrevPage}
          >
            prev
          </a>
        </li>
        {pages(lastPage).map(page => (
          <li className={classNames('pagination__item', {
          disabled: currentPage === 1,
        })}
        >
          <a 
            className="pagination__link"
            href='#/phones'
            onClick={() => handleChangePage(page)}
          >
            {page}
          </a>
        </li>
        ))}
         <li className={classNames('pagination__item', {
          disabled: currentPage === 1,
        })}
        >
          <a 
            className="pagination__link"
            href='#/phones'
            onClick={handleNextPage}
          >
            next
          </a>
        </li>
      </ul>
    </>
  )
}
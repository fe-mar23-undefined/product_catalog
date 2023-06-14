import './Select.scss';
import { useState } from "react"
import classNames from 'classnames';

const options = ["All", "16", "8", "4"];

interface Props {
  value: number;
  length: number;
  onChangePerPageValue: (option: string) => void;
}

export const Select: React.FC<Props> = ({
  value,
  length,
  onChangePerPageValue
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = (option: string) => {
    onChangePerPageValue(option)
    setIsOpen(!isOpen)
  };

  return (
    <div>
      <div className={classNames('select__header', {
        'select__header--active': isOpen,
      })}
        onClick={() => setIsOpen(prev => !prev)}>
        {length === value ? 'All' : value}
        <svg className={classNames({
          active: isOpen,
        })}
          width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z" fill="currentColor" />
        </svg>
      </div>
      {isOpen && (
        <div className='select__drop-down'>
          <ul className='select__drop-down__list'>
            {options.map(option => (
              <li
                className='select__drop-down__list-item'
                key={option}
              >
                <a
                  href='#/phones'
                  className='select__drop-down__list-link'
                  onClick={() => toggling(option)}
                >
                  {option}
                </a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
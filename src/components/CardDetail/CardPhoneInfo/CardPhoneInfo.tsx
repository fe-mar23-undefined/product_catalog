import '../../CardDetail/CardPhoneInfo/CardPhoneInfo.scss';
import { PhoneDetails } from '../../../types/PhoneDetails';

import { useState } from 'react';


interface Props {
  phones:PhoneDetails,
    isFullPrices: boolean;
  }

export const CardPhoneInfo: React.FC<Props> = ({phones, isFullPrices}) => {
    const { priceRegular, priceDiscount, screen, ram,  capacity } = phones;

    const [isSelected, setIsSelected] = useState(false);
    const [isBasket, setIsBasket] = useState(true);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsSelected(!isSelected);
    };

    const handleClickToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsBasket(!isBasket);
    };

    return (
        <div className="card-product__container">

        <div className="card-product__price-details">
          <span className="card-product__price">
            ${priceDiscount}
          </span>

          {isFullPrices
            && <span className="card-product__full-price">
            ${priceRegular}
          </span>}

        </div>

        <div className="card-product__add-prod-to-card">

        <button
          className={isBasket ? 'card-product__add-to-card' : 'card-product__add-to-card--active'}
          onClick={handleClickToBasket}
        >
          {isBasket ? 'Add to card' : 'Added'}
        </button>

        <button
         onClick={handleClick}
          className={`card-product__save-product ${isSelected ? 'card-product__save-product--selection' : ''}`}
        >
        </button>

        </div>

        <div className="card-product__block-details">

        <div className="card-product__details">
          <span className="card-product__prod-details-description">Screen</span>
          <span className="card-product__prod-details">{screen}</span>
        </div>

        <div className="card-product__details">
          <span className="card-product__prod-details-description">Capacity</span>
          <span className="card-product__prod-details">{capacity}</span>
        </div>

        <div className="card-product__details">
          <span className="card-product__prod-details-description">Ram</span>
          <span className="card-product__prod-details">{ram}</span>
        </div>

      </div>
      </div>
    )
}
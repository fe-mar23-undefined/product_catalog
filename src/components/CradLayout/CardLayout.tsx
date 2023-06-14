/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Phone } from '../../types/Phone';

import '../../Components/CardLayout/CardLayoutStyle.scss'

interface Props {
  phone: Phone;
  isFullPrices: boolean;
}

export const CardLayoutDetails: React.FC<Props> = ({ phone, isFullPrices }) => {
  const { image, price, fullPrice, screen, ram, name, capacity } = phone;
  const [isSelected, setIsSelected] = useState(false);
  const [isBasket, setIsBasket] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsSelected(!isSelected);
  };

  const handleClickToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsBasket(!isBasket);
  };

  return (
    <div className="card-product">
      <div className="card-product__container">
        <div className="card-product__block">
        <img
          className="card-product__image"
          src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
          alt={name}
        />
        <p className="card-product__desription">{name}</p></div>
        <div className="card-product__price-details">
          <span className="card-product__price">${price}</span>
          {isFullPrices && <span className="card-product__full-price">${fullPrice}</span>}
        </div>
        <div className="card-product__line"></div>
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
          ></button>
        </div>
      </div>
    </div>
  );
};

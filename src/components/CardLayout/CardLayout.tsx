/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlovalContextProvider';
import { Phone } from '../../types/Phone';

import './CardLayout.scss'

interface Props {
  phone: Phone;
  slug: string;
}

export const CardLayout: React.FC<Props> = ({ phone, slug }) => {
  const { image, 
    price, 
    fullPrice, 
    screen, 
    ram, 
    name, 
    capacity,
    phoneId,
   } = phone;

  const {addToCart, addToFavourites, cart, favourites} = useGlobalContext();

  const isFavourited = favourites
    .some(phoneToFind => phoneToFind.id === phone.id);

  const isAddedToCart = cart
    .some(phoneToFind => phoneToFind.id === phone.id);

  return (
    <div className="card-product">
      <div className="card-product__container">
        <div className="card-product__block">
          <img
            className="card-product__image"
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
            alt={name}
          />
          <p  className="card-product__desription">
            <Link to={`${slug}${phoneId}`}>{name}</Link></p>
        </div>
        <div className="card-product__price-details">
          <span className="card-product__price">${price}</span>
          {fullPrice && <span className="card-product__full-price">${fullPrice}</span>}
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
            className={isAddedToCart ? 'card-product__add-to-card--active' : 'card-product__add-to-card'}
            onClick={() => addToCart(phone)}
            disabled={isAddedToCart}
          >
            {!isAddedToCart ? 'Add to card' : 'Added'}
          </button>
          <button
            onClick={() => addToFavourites(phone)}
            className={`card-product__save-product ${isFavourited ? 'card-product__save-product--selection' : ''}`}
          ></button>
        </div>
      </div>
    </div>
  );
};

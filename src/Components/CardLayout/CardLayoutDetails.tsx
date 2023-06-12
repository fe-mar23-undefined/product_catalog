import { Phone } from '../../types/Phone';

interface Props {
  phone: Phone;
}

export const CardLayoutDetails: React.FC<Props> = ({ phone }) => {

const {id, image, capacity, price, fullPrice, screen, ram, name} = phone;

return (
    <div className="card-product">
    <div className="card-product__container">

      <img className="card-product__image"
        src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
        alt={name}
      />

      <div className="card-product__decription-block">
        <p className="card-product__dexription">
          {capacity}
        </p>

        <span className="card-product__price">
          ${price}
        </span>
        <span className="card-product__full-price">
          ${fullPrice}
        </span>
      </div>

      <div className="card-product__details">
        <div className="card-product">
          <span className="card-product__prod-details-description">
            screen
          </span>

          <span className="card-product__prod-details">
            {screen}
          </span>

        </div>
      </div>

      <div className="card-product__details">
        <div className="card-product">
          <span className="card-product__prod-details-description">
            Ram
          </span>

          <span className="card-product__prod-details">
            {ram}
          </span>

        </div>
      </div>

      <div className="card-product__add-prod-to-card">
        <a href="#">
          Add to card
        </a>

        <button type="button">
          ikonka
        </button>

      </div>
    </div>
  </div>
)
};

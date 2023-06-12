
import { Phone } from '../../types/Phone';

import '../../Components/CardLayout/CardLayoutStyle.scss'

interface Props {
  phone: Phone;
  isFullPrices: boolean;
}

export const CardLayoutDetails: React.FC<Props> = ({ phone, isFullPrices }) => {

const {image, phoneId, price, fullPrice, screen, ram, name, capacity} = phone;


return (
    <section className="card-product">
    <div className="card-product__container">

      <img className="card-product__image"
        src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
        alt={name}
      />
       <p className="card-product__desription">
          {phoneId}
        </p>
      <div className="card-product__price-details">

        <span className="card-product__price">
          ${price}
        </span>
        {isFullPrices && <span className="card-product__full-price">
          ${fullPrice}
        </span>}
      </div>

      <div className="card-product__line"></div>

      <div className="card-product__details">

          <span className="card-product__prod-details-description">
            Screen
          </span>

          <span className="card-product__prod-details">
            {screen}
          </span>


      </div>

      <div className="card-product__details">

      <span className="card-product__prod-details-description">
          Capacity
      </span>

      <span className="card-product__prod-details">
        {capacity}
      </span>


</div>

      <div className="card-product__details">

          <span className="card-product__prod-details-description">
            Ram
          </span>

          <span className="card-product__prod-details">
            {ram}
          </span>


      </div>

      <div className="card-product__add-prod-to-card">
        <a className="card-product__add-to-card" href="#">
          Add to card
        </a>

        <a
          href="#"
          className="card-product__save-product"
          type="button">
        </a>


      </div>
    </div>
  </section>
)
};

CardLayoutDetails.defaultProps = {
  isFullPrices: false,
};
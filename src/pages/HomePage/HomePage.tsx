import './HomePage.scss';

export const HomePage = () => 
  <>
  <h1>Home Page</h1>
  <section className="section__category">
    <h2 className="section__title">Shop by category</h2>
      <div className="card__container">

        <div className="card__wrapper">

          <div className="card card--1">
            <img className="card__image card__image--1" src="https://github.com/mate-academy/product_catalog/blob/main/public/img/category-phones.png?raw=true" alt="Phones category img" />
          </div>
          <h4>Mobile phones</h4>
          <p className="card__item__count">95 models</p>
        </div>

        <div className="card__wrapper">

          <div className="card card--2">
            <img className="card__image card__image--2" src="https://github.com/mate-academy/product_catalog/blob/main/public/img/category-tablets.png?raw=true" alt="Phones category img" />
          </div>
          <h4>Tablets</h4>
          <p className="card__item__count">24 models</p>
        </div>

        <div className="card__wrapper--1">

          <div className="card card--3">
            <img className="card__image card__image--3" src="https://github.com/mate-academy/product_catalog/blob/main/public/img/category-accessories.png?raw=true" alt="Phones category img" />
          </div>
          <h4>Accessories</h4>
          <p className="card__item__count">100 models</p>
        </div>
      </div>
  </section>
  </>
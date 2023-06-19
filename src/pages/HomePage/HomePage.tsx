import { useEffect, useMemo, useState } from 'react';
import { getPhones } from '../../api/phones';
import { Carousel } from '../../components/Carousel';
import { Phone } from '../../types/Phone';
import './HomePage.scss';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(1);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadPhones = async () => {
    try {
      setIsLoading(true);
      const loadedPhones = await getPhones();
      setPhones(loadedPhones);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const brandNewPhones = useMemo(() => {
    let newPhones = [...phones];
    return newPhones.sort((firstPhone, secondPhone) => secondPhone.year - firstPhone.year);
  }, [phones]);

  const hotPricesPhones = useMemo(() => {
    let newPhones = [...phones];
    return newPhones.sort((firstPhone, secondPhone) => firstPhone.price - secondPhone.price);
  }, [phones]);

  useEffect(() => {
    loadPhones();
  }, []);

  const totalImages = 3;

  const images = [
    'https://github.com/mate-academy/product_catalog/blob/main/public/img/banner-accessories.png?raw=true',
    'https://github.com/mate-academy/product_catalog/blob/main/public/img/banner-phones.png?raw=true',
    'https://github.com/mate-academy/product_catalog/blob/main/public/img/banner-tablets.png?raw=true',
  ];

  const showNextImage = () => {
    const nextPhoto = selectedPhoto < totalImages ? selectedPhoto + 1 : 1;
    setSelectedPhoto(nextPhoto);
  };

  const showPreviousImage = () => {
    const previousPhoto = selectedPhoto > 1 ? selectedPhoto - 1 : totalImages;
    setSelectedPhoto(previousPhoto);
  };

  return (
    <div className="page__wrapper">
      <h1 className="title">Welcome to Nice Gadgets store!</h1>

      <section className="banner__wrapper">
        <div className="banner">
        <button className="arrow arrow--left" onClick={showPreviousImage} />
        <div className="content">
          <img
            className="content__image"
            src={images[selectedPhoto - 1]}
            alt="carousel item"
          />
        </div>
        <button className="arrow arrow--right" onClick={showNextImage} />
        </div>
      </section>

      <div className="select__container">
        <div className="select__wrapper">
          <div className={`selector selector--1 ${selectedPhoto === 1 ? 'is-selected' : ''}`} onClick={() => setSelectedPhoto(1)}></div>
          <div className={`selector selector--2 ${selectedPhoto === 2 ? 'is-selected' : ''}`} onClick={() => setSelectedPhoto(2)}></div>
          <div className={`selector selector--3 ${selectedPhoto === 3 ? 'is-selected' : ''}`} onClick={() => setSelectedPhoto(3)}></div>
        </div>
      </div>
      
      <Carousel phones={brandNewPhones} title="Brand new models" />
      
      <section className="section__category">
        <h2 className="section__title">Shop by category</h2>
        <div className="card__container">
        <Link to="/phones" className="card__wrapper">
            <div className="card card--1">
              <img
                className="card__image card__image--1"
                src="https://github.com/mate-academy/product_catalog/blob/main/public/img/category-phones.png?raw=true"
                alt="Phones category img"
              />
            </div>
            <h4 className="card__product">Mobile phones</h4>
            <p className="card__item__count">95 models</p>
          </Link>

          <Link to="/tablets" className="card__wrapper">
            <div className="card card--2">
              <img
                className="card__image card__image--2"
                src="https://github.com/mate-academy/product_catalog/blob/main/public/img/category-tablets.png?raw=true"
                alt="Phones category img"
              />
            </div>
            <h4 className="card__product">Tablets</h4>
            <p className="card__item__count">24 models</p>
          </Link>

          <Link to="/accessories" className="card__wrapper--1">
            <div className="card card--3">
              <img
                className="card__image card__image--3"
                src="https://github.com/mate-academy/product_catalog/blob/main/public/img/category-accessories.png?raw=true"
                alt="Phones category img"
              />
            </div>
            <h4 className="card__product">Accessories</h4>
            <p className="card__item__count">100 models</p>
          </Link>
        </div>
      </section>

      <Carousel phones={hotPricesPhones} title="Hot prices" />
    </div>
  );
};

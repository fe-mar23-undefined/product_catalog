
import React, { useState, useMemo, useContext, useEffect } from 'react';
import { useGlobalContext } from '../../../context/GlobalContextProvider';
import '../../../components/Card-Details/Card-phone-details/CardPhoneDetails.scss';

import { PhoneDetails } from '../../../types/PhoneDetails';

interface Props {
    phone: PhoneDetails;
}

export const CardPhoneDetails:  React.FC<Props> = ( {phone} ) => {

    const {colorsAvailable, capacityAvailable, priceDiscount, priceRegular, screen, resolution, processor, ram,

     } = phone;

  const [addedToFavorites, setIsAddToFavorites] = useState(false);
  const [addedToBasket, setIsAddedToBasket] = useState(false);
  const [pickedCapacity, setPickedCapacity] = useState(capacityAvailable[0]);
  const [productColor, setProductColor] = useState(colorsAvailable[0]);
  const [discountPrice, setDiscountPrice] = useState(priceDiscount);
  const [regularPrice, setRegularPrice] = useState(priceRegular);
  const [prevPickedCapacity, setPrevPickedCapacity] = useState('');

  const addToFav = () => {
    setIsAddToFavorites(!addedToFavorites);
  };

  const addToBasket = () => {
    setIsAddedToBasket(!addedToBasket);
  };

  const pickCapacity = (value: string) => {

    if (value === pickedCapacity) {
      setPickedCapacity(prevPickedCapacity);
    } else {
      setPrevPickedCapacity(pickedCapacity);
      setPickedCapacity(value);
    }
  };

  const pickColor = (value: string) => {
    setProductColor(value);
  };

  useEffect(() => {
    const clickedCapacity = parseInt(pickedCapacity);
    const priceDifference = clickedCapacity - parseInt(capacityAvailable[0]);
    setRegularPrice(priceRegular + priceDifference);
    const discountPercentage = 0.2;
    const calculatedDiscountPrice = Math.floor(regularPrice - regularPrice * discountPercentage);
    setDiscountPrice(calculatedDiscountPrice);
  }, [pickedCapacity, capacityAvailable, priceRegular, regularPrice]);

  useEffect(() => {

    const discountPercentage = 0.2;
    const calculatedDiscountPrice = Math.floor(regularPrice - regularPrice * discountPercentage);
    setDiscountPrice(calculatedDiscountPrice);
  }, [regularPrice]);

  const {addToCart, addToFavourites, cart, favourites} = useGlobalContext();

  const isFavourited = favourites
  .some(phoneToFind => phoneToFind.id === phone.id);

const isAddedToCart = cart
  .some(phoneToFind => phoneToFind.phone.id === phone.id);

return (

  <div className="product-elem">
    <div className="product-elem__container">

      <div className="product-elem__elem">
        <div className="product-elem__header-container">
        <div className="product-elem__header">
          <h2 className="product-elem__header-elem">Available colors</h2>
        </div>
        <div className="product-elem__header-id">
          <span className="product-elem__header-elem">ID: 802390</span>
        </div>
        </div>

        <div className="product-elem__colors-elem">

            {colorsAvailable
              .map((color) => (
                <div className={productColor === color
                  ? "product-elem__colors--isActive" : "product-elem__colors" }
                    style={{ background: color }}
                    key={color}
                    onClick={() => pickColor(color)}
                  >
                </div>
            )
            )}

      </div>

      <div className="product-elem__line-divader"></div>
        </div>

      <div className="product-elem__elem-capacity">

          <h2 className="product-elem__header-elem">Select capacity</h2>
          <div className="product-elem__capacity-container">

      {capacityAvailable
        .map((capacity) => (
          <div className={pickedCapacity === capacity ?
             "product-elem__capacity-elem" : "product-elem__capacity-elem--isActive"}
             onClick={()=> pickCapacity(capacity)}
             key={capacity}
          >
            {capacity}
          </div>
          )
          )}

        </div>

        <div className="product-elem__line-divader"></div>
        </div>

        <div className="product-elem__price">
          <span className="product-elem__full-price">
            ${discountPrice}
          </span>

          <span className="product-elem__discount-price">
            ${regularPrice}
          </span>
        </div>

        <div className="product-elem__buy-btns">
      <div
        onClick={addToBasket}
      /*  onClick={() => addToCart(phone)} */
        className={addedToBasket ?
          "product-elem__add-to-card--isActive"
          : "product-elem__add-to-card"
        }>

        {addedToBasket ? 'Added' : 'Add to cart' }
      </div>

      <div
        onClick={addToFav}
        className={addedToFavorites ?
          "product-elem__add-to-fav--isActive"
          : "product-elem__add-to-fav"}
       >
      </div>

    </div>

    <div className="product-elem__capacity-phone-details">

            <div className="product-elem__detail">
            <div className="product-elem__elem-name">
              Screen
            </div>
            <div className="product-elem__elem-detail">
              {screen}
            </div>
            </div>

            <div className="product-elem__detail">
            <div className="product-elem__elem-name">
              Resolution
            </div>
            <div className="product-elem__elem-detail">
              {resolution}
            </div>
            </div>

            <div className="product-elem__detail">
            <div className="product-elem__elem-name">
            Processor
            </div>
            <div className="product-elem__elem-detail">
              {processor}
            </div>
            </div>

            <div className="product-elem__detail">
            <div className="product-elem__elem-name">
            RAM
            </div>
            <div className="product-elem__elem-detail">
              {ram}
            </div>
            </div>
    </div>

   </div>
  </div>
)
}

import React, { useState, useEffect } from 'react';
import '../../../components/Card-Details/Card-phone-details/CardPhoneDetails.scss';

import { PhoneDetails } from '../../../types/PhoneDetails';


interface Props {
    phone: PhoneDetails;
}



export const CardPhoneDetails:  React.FC<Props> = ( {phone} ) => {

    const {colorsAvailable, capacityAvailable, priceDiscount, priceRegular, screen, resolution, processor, ram

     } = phone;

     const [addedToFavorites, IsAddToFavorites] = useState(false);
     const [addedToBasket, IsAddedToBasket] = useState(false);
     const [pickedCapacity, IsPickedCapacity] = useState(capacityAvailable[0]);
     const [productColor, isProductColor] = useState(colorsAvailable[0])
     const [regularPrice, isRegularPrice] = useState(priceRegular);

     const addToFav = () => {
        IsAddToFavorites(!addedToFavorites);
     }

     const addToBasket = () => {
        IsAddedToBasket(!addedToBasket);
     }

     const pickCapacity = (value: string ) => {
        IsPickedCapacity(value);

     }

     const pickCololor = (value: string) => {
      isProductColor(value)
     }

     useEffect(() => {

      const clickedCapacity = parseInt(pickedCapacity) + 1000;
      /* isRegularPrice(clickedCapacity) */



        isRegularPrice(clickedCapacity)

        console.log(clickedCapacity, regularPrice);


      }, [regularPrice, pickedCapacity]);







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
                  <div className={productColor === color ? "product-elem__colors--isActive" : "product-elem__colors" }
                    style={{ background: color }}
                    key={color}
                    onClick={() => pickCololor(color)}
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
            ${priceRegular}
          </span>

          <span className="product-elem__discount-price">
            ${priceDiscount}
          </span>
        </div>

        <div className="product-elem__buy-btns">
      <div
        onClick={addToBasket}
        className={addedToBasket ?
          "product-elem__add-to-card--isActive"
          : "product-elem__add-to-card"
        }>

        {addedToBasket ? 'Added' : 'Add to cart' }
      </div>
      <div
        onClick={addToFav}
        className={addedToFavorites ?
          "product-elem__add-to-fav"
          : "product-elem__add-to-fav--isActive"}
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
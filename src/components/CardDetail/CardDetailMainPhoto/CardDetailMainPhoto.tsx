import { useEffect } from 'react';

import './CardDetailMainPhoto.scss';
import { CardDetailPhoto } from '../CardDetailPhoto/CardDetailPhoto';
import { useState } from 'react';
import { CardPhoneInfo } from '../CardPhoneInfo';
import { CardDetailCapacity } from '../CardDetailCapacity/CardDetailCapacity';
import { CardDetailColorPicker } from '../CardDetailColorPicker/CardDetailColorPicker';
import { CardDetailColorPickerHeader } from '../CardDetailColorPickerHeader/CardDetailColorPickerHeader';

import { CardDetaileDescription } from '../CardDetaileDescription/CardDetailDescription';


import { PhoneDetails } from '../../../types/PhoneDetails';


interface PhoneData {
  phone: PhoneDetails;
}

export const CardDetailMainPhoto: React.FC<PhoneData> = ({phone}) => {

  const {images, colorsAvailable, capacityAvailable,

  } = phone;


 const mainPhotoLink = `https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${images[0]}`;

const [currentImg, setCurrentImg] = useState(mainPhotoLink);

useEffect(() => {

  if(images.length) {
    setCurrentImg(mainPhotoLink)
  }

}, [images, mainPhotoLink])

  const clickedPrevPhoto = (srcPhoto: string) => {
    setCurrentImg(srcPhoto)
  }


  return (
    <div className="img-product-details">
      <div className="img-product-details__container">

        <div className="img-product-details__img-prev">
          <CardDetailPhoto images={images} clickedPrevPhoto={clickedPrevPhoto} />
        </div>


        <div className="img-product-details__img-main">
          <img src={currentImg} alt="" />
        </div>


        <div className="img-product-details__phone-details">
          <div className="img-product-details__block">


            <div className="img-product-details__block-header">
              <CardDetailColorPickerHeader />
            </div>

            <div className="img-product-details__block-color-picker">
              <CardDetailColorPicker  colors={colorsAvailable} />
            </div>

            <div className="img-product-details__block-capacity">
              <CardDetailCapacity capacityAvailable={capacityAvailable} />
            </div>

            <div className="img-product-details__block-phone-info">
              <CardPhoneInfo  phones={phone} isFullPrices={true}  />
            </div>



          </div>

        </div>
      </div>

      <div className="img-product-details__block-desciption">

        <CardDetaileDescription phones={phone} />
      </div>
    </div>
  );
};

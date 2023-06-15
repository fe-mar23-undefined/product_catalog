import './CardDetailMainPhoto.scss';
import { CardDetailPhoto } from '../CardDetailPhoto/CardDetailPhoto';
import { useState, useEffect, useMemo } from 'react';
import { CardPhoneInfo } from '../CardPhoneInfo';
import { CardDetailCapacity } from '../CardDetailCapacity/CardDetailCapacity';
import { CardDetailColorPicker } from '../CardDetailColorPicker/CardDetailColorPicker';
import { CardDetailColorPickerHeader } from '../CardDetailColorPickerHeader/CardDetailColorPickerHeader';
import phones from '../../../api/phones.json';

interface PhoneData {
  name: string;
  images: string[];
}

export const CardDetailMainPhoto = () => {
  const [image, setImage] = useState<PhoneData>({ name: '', images: [] });
  /* const [data, setData] = useState(); */

  /* setData(phones) */

  const colors = [
    { id: 1, color: '#FCDBC1' },
    { id: 2, color: '#5F7170' },
    { id: 3, color: '#4C4C4C' },
    { id: 4, color: '#E2E6E9' },
  ];

  const a = `https://catalog-api-delta.vercel.app/api/phones/apple-iphone-7-32gb-black`;

  useEffect(() => {
    fetch(a)
      .then((res) => res.json())
      .then((data: PhoneData) => {
        setImage(data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, [a]);

  const { images } = image;

  const[currentImg, setCurrentImg] = useState('');

  useMemo(() => {

    if(images) {
      setCurrentImg(`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public//${images[0]}`)
    }
  }, [images]);




 const clickedPrevPhoto = (srcPhoto: string) => {
  setCurrentImg(srcPhoto)
 }


  return (
    <div className="img-product-details">
      <div className="img-product-details__container">

        <div className="img-product-details__img-prev">
          <CardDetailPhoto images={images} clickedPrevPhoto={clickedPrevPhoto}/>
        </div>


        <div className="img-product-details__img-main">
          <img src={currentImg} alt="" />
        </div>




        <div className="img-product-details__phone-details">
          <div className="img-product-details__block">
            <CardDetailColorPickerHeader />
            <CardDetailColorPicker  colors={colors} />
            <CardDetailCapacity />
            <CardPhoneInfo phone={phones[0]} isFullPrices={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

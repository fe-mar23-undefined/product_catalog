import { useState } from 'react';

import './CardDetailPhoto.scss';


interface Props {
  images: string[];
  clickedPrevPhoto: (value: string) => void;
}

export const CardDetailPhoto: React.FC<Props> = ({ images, clickedPrevPhoto }) => {

  const [isColorActive, setIsColorActive] = useState(0);

  const handleClick = (value: number, srcImg: string) => {
    setIsColorActive(value)
    clickedPrevPhoto(srcImg)
  }

  return (
    <div className="photo-prev">
      {images.map((image: string, index: number) => (
        <img
          onClick={()=> handleClick(index,

            `https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`

            )}
          className={isColorActive === index
            ? "photo-prev__images"
            : "photo-prev__images--isActive"
          }
          key={index}
          src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
          alt=""
        />
      ))}
    </div>
  );
};

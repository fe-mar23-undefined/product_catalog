import { useState } from "react";

import '../../../components/Card-Details/CardPhotoImg/CardPhotoImg.scss'

interface Props {
    images: string[];
}

export const CardPhotoImg:React.FC<Props> = ({images}) => {

    const getImage = `https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${images[0]}`

    const [isColorActive, setIsActiveColor] = useState(getImage);
    const [isIndexActive, setIsIndexActive] = useState(0);

    const handleClick = (value: number, srcImg: string) => {
      setIsIndexActive(value);
      setIsActiveColor(srcImg);
    }

return (

  <div className="product-photo">
    <div  className="product-photo__container">
      <div  className="product-photo__photo-prev">

        {images.map((image: string, index: number) => (

        <img
          className={isIndexActive !== index
          ? "product-photo__photo-prev-elem"
          : "product-photo__photo-prev-elem--isActive"
          }
          onClick={()=> handleClick(index,
            `https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`
            )}
          key={index}
          src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
          alt=""
        />
        ))}

      </div>

      <div  className="product-photo__photo-main">
        <img src={isColorActive} alt="" />
      </div>
    </div>
  </div>
)
}

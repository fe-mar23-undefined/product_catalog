
import { PhoneDetails } from '../../../types/PhoneDetails';
import  { CardPhotoImg } from '../CardPhotoImg/CardPhotoImg';
import { CardPhoneDetails } from '../../../components/Card-Details/Card-phone-details/CardPhoneDetails';
import '../../../components/Card-Details/Card-phone/CardPhoto.scss';
import { CardPhoneDescription } from  '../CardPhoneDescription/CardPhoneDescription';
 interface PhoneData {
  phone: PhoneDetails;
}

export const CardPhoto: React.FC<PhoneData> = ({ phone }) => {

  const {images, name
  } = phone;


  return (
    <div className="img-product-details">
      <div className="img-product-details__container">

        <div className="img-product-details__header">
            <h1 className="img-product-details__title">
              {name}
            </h1>
        </div>

        <div className="img-product-details__product-img">

         <CardPhotoImg images={images}/>
        </div>

        <div className="img-product-details__product-details">

          <CardPhoneDetails phone={phone} />
        </div>

        <div className="img-product-details__product-decription">

          <CardPhoneDescription phones={phone}/>
        </div>
      </div>
    </div>
  );
};

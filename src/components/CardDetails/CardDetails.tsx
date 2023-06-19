
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { Phone } from '../../types/Phone';
import { PhoneDetails } from '../../types/PhoneDetails';
import { Carousel } from '../Carousel';
import './CardDetails.scss';

 interface PhoneData {
  phones: Phone[];
  phone: PhoneDetails;
  shortPhone: Phone;
  selectedPhones: PhoneDetails[];
  setPhone: (id: string) => void;
}

interface description {
  title: string,
  text: string[];
}

export const CardDetails: React.FC<PhoneData> = ({ phone, shortPhone, selectedPhones, setPhone, phones }) => {
  const {images, name, camera,capacity,capacityAvailable,colorsAvailable,description,priceDiscount,priceRegular,processor,ram,resolution,screen,zoom, color,
  } = phone;

  useEffect(() => {
     setSelectedImage(`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${images[0]}`)
  }, [images])

  const navigate = useNavigate();
  
  const [selectedImage, setSelectedImage] = useState('');
  const [productColor, setProductColor] = useState(color);
  const [selectedCapacity, setSelectedCapacity] = useState(capacity.toLowerCase());    
  
   const addToFav = () => {
    if (shortPhone) {
      addToFavourites(shortPhone)
    }
  };

  useEffect(() => {
    const newId = phone.id.split('-');
    newId.splice(-1)
    setPhone(`${newId.join('-')}-${productColor}`)

    
    navigate(`/phones/${newId.join('-')}-${productColor}`)
  }, [productColor])

  useEffect(() => {
    const newId = phone.id.split('-');
    newId.splice(-2)
    setPhone(`${newId.join('-')}-${selectedCapacity}-${productColor}`)
    
    navigate(`/phones/${newId.join('-')}-${selectedCapacity}-${productColor}`)
  }, [selectedCapacity])

  const setColorAnd = (color:string) => {
    setProductColor(color)

    const newId = phone.id.split('-');
    newId.splice(-1)
  }

  const addToBasket = () => {
    if (!isAddedToCart) {
      if (shortPhone) {
        addToCart(shortPhone)
      }
    }
  };

  const cells = phone.cell.map((item) => `${item}`).join(', ');

  const {addToCart, addToFavourites, cart, favourites} = useGlobalContext();

  const isFavourited = favourites
  .some(phoneToFind => phoneToFind.phoneId === shortPhone?.phoneId);

const isAddedToCart = cart
  .some(phoneToFind => phoneToFind.phone.phoneId === shortPhone?.phoneId);


  return (
    <div className="img-product-details">
      <div className="img-product-details__container">

        <div className="img-product-details__header">
            <h1 className="img-product-details__title">
              {name}
            </h1>
        </div>

        <div className="img-product-details__product-img">

          <div className="product-photo">
    <div  className="product-photo__container">
      <div  className="product-photo__photo-prev">

        {images.map((image: string, index: number) => (
        <img
          className={image !== selectedImage
          ? "product-photo__photo-prev-elem"
          : "product-photo__photo-prev-elem--isActive"
          }
          onClick={()=> setSelectedImage(`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`)}
          key={index}
          src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
          alt=""
        />
        ))}

      </div>

      <div  className="product-photo__photo-main">
        <img src={selectedImage} alt="" />
      </div>
    </div>
  </div>
        </div>

        <div className="img-product-details__product-details">

          
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
                    onClick={() => setColorAnd(color)}
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
          <div className={selectedCapacity === capacity.toLowerCase() ?
             "product-elem__capacity-elem" : "product-elem__capacity-elem--isActive"}
             onClick={()=> setSelectedCapacity(capacity.toLowerCase())}
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
            ${priceDiscount}
          </span>

          <span className="product-elem__discount-price">
            ${priceRegular}
          </span>
        </div>

        <div className="product-elem__buy-btns">
      <button
        onClick={addToBasket}
        className={isAddedToCart ?
          "product-elem__add-to-card--isActive"
          : "product-elem__add-to-card"
        }

        >

        {isAddedToCart ? 'Added' : 'Add to cart' }
      </button>

      <button
        onClick={addToFav}
        className={isFavourited ?
          "product-elem__add-to-fav--isActive"
          : "product-elem__add-to-fav"}
        
       >
      </button>

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
        </div>

        <div className="img-product-details__product-decription">

          <section className="card-details">
    <div className="card-details__container">

      <div className="card-details__block-one">
      <h2 className="card-details__header">
        About
      </h2>


      {description.map((item: description) => (
            <div className="card-details__element" key={item.title}>
              <h3 className="card-details__element-header">{item.title}</h3>
              {item.text.map((text: string) => (
              <p className="card-details__content" key={text}>{text}</p>))}
            </div>
          ))}

    </div>
      <div className="card-details__block-two">
        <h2 className="card-details__header">
          Tech specs
        </h2>

        <div className="card-details__specs-block">

        <div className="card-details__phone-details">
            <span className="card-details__property">Screen</span>
            <span className="card-details__specs">{screen}</span>
        </div>

        <div className="card-details__phone-details">
            <span className="card-details__property">Resolution</span>
            <span className="card-details__specs">{resolution}</span>
        </div>

        <div className="card-details__phone-details">
            <span className="card-details__property">Processor</span>
            <span className="card-details__specs">{processor}</span>
        </div>

        <div className="card-details__phone-details">
            <span className="card-details__property">RAM</span>
            <span className="card-details__specs">{ram}</span>
        </div>

        <div className="card-details__phone-details">
            <span className="card-details__property">Built in memory</span>
            <span className="card-details__specs">{capacity}</span>
        </div>

        <div className="card-details__phone-details">
            <span className="card-details__property">Camera</span>
            <span className="card-details__specs">{camera}</span>
        </div>

        <div className="card-details__phone-details">
            <span className="card-details__property">Zoom</span>
            <span className="card-details__specs">{zoom}</span>
        </div>

        <div className="card-details__phone-details">
            <span className="card-details__property">Cell</span>
            <span className="card-details__specs">{cells}</span>
        </div>
      </div>
      </div>
    </div>
  </section>
        </div>
      </div>
      <Carousel phones={phones} title="You may also like" />
    </div>
  );
};

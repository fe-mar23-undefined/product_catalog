import { useEffect, useState } from "react";
import { Phone } from "../../types/Phone";
import { CardLayout } from "../CardLayout";
import './Carousel.scss';

interface Props {
  phones: Phone[];
  title: string;
}

export const Carousel: React.FC<Props> = ({ phones, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(phones.slice(0, 10).length);


  useEffect(() => {
    setLength(phones.slice(0, 10).length)
  }, [phones])
  
  const handleNext = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

return (
  <div className="carousel">
    <div className="carousel__header">
      <h1 className="carousel__title">{title}</h1>
      <div className="carousel__buttons-container">
        <button 
          className="carousel__button carousel__button-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        />
        <button 
          className="carousel__button carousel__button-next"
          onClick={handleNext}
          disabled={currentIndex === length}
        />
      </div>
    </div>
    <div className="carousel__wrapper">
      <div className="carousel__wrapper-content">
        <div className={`carousel__items-container show`}>
          {phones.slice(0, 10).map(phone => (
            <div 
            className="carousel__item" 
            key={phone.phoneId}
            style={{ 
              transition: `transform 300ms`,
              transform: `translateX(-${currentIndex * (100)}%)` }}>
              <CardLayout phone={phone} slug="accessories" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
}
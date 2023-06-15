import'./CardDetailsDescription.scss';
import { PhoneDetails } from '../../types/PhoneDetails';
import { useEffect } from 'react';

interface Props {
  phones: PhoneDetails;
}

interface description {
  title: string,
  text: string[];
}

export const CardDetailsDescription: React.FC<Props> = ({ phones }) => {
  const {screen, resolution, processor, ram, camera, zoom, cell, description, memory} = phones;

  const cells = cell.map((item) => `${item}`).join(', ');

  useEffect(() => {

    console.log(phones, 'kkkkk');
  }, [phones]);

  console.log(phones, 'dfgdfdfdf');


return (

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
            <span className="card-details__specs">{memory}</span>
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
)
}
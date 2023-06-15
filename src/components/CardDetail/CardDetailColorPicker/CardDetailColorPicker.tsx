/* eslint-disable jsx-a11y/anchor-has-content */

import { useState } from 'react';

import '../CardDetailColorPicker/CardDetailColorPicker.scss';
import { PhoneColors } from '../../../types/PhoneColors';

interface Props {
  colors:PhoneColors[];
}

export const CardDetailColorPicker: React.FC<Props> = (
  {colors}
  ) => {

  const [phoneColor, setPhoneColor] = useState(colors[0].color);
  const [isSelected, setIsSelected] = useState(true);

  const selectedPhoneColor = (value: string) => {

    setPhoneColor(value);
    setIsSelected(!isSelected);

  }

    return (
      <div className="color-picker">
        <div className="color-picker__container">

         {/*  <div className="color-picker__block-one">
            <div className="color-picker__header">Available colors</div>
            <div className="color-picker__id-info">ID: 802390</div>
          </div>
 */}

          <div className="color-picker__block-two">
            {colors.map((color) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={color.id}
                href="#"
                className={ (phoneColor === color.color) ? "color-picker__color-circle--isActive" : "color-picker__color-circle"}
                style={{ background: color.color }}
                onClick={(e) => {
                  e.preventDefault();
                  selectedPhoneColor(color.color)
                }}
              ></a>
            ))}
          </div>
        </div>
      </div>
    );
  };
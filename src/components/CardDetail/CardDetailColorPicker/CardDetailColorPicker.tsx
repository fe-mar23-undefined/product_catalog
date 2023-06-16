/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import { useState, useEffect} from 'react';

import '../CardDetailColorPicker/CardDetailColorPicker.scss';

interface Props {
  colors: string[];
}

export const CardDetailColorPicker: React.FC<Props> = ({ colors }) => {

  const getFirstColor = colors[0];
  const [phoneColor, setPhoneColor] = useState(getFirstColor);


  useEffect(() => {

      if(setPhoneColor.length) {
        setPhoneColor(getFirstColor)
      }

  }, [colors, getFirstColor ])




  return (
    <div className="color-picker">
      <div className="color-picker__container">
        {/* <div className="color-picker__block-one">
          <div className="color-picker__header">Available colors</div>
          <div className="color-picker__id-info">ID: 802390</div>
        </div> */}
        <div className="color-picker__block-two">
          {colors.map((color) => (
            <a
              key={color}
              href="#"
              className={
                phoneColor === color
                  ? 'color-picker__color-circle--isActive'
                  : 'color-picker__color-circle'
              }
              style={{ background: color }}
              onClick={(e) => {
                e.preventDefault();
                setPhoneColor(color);
              }}
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* eslint-disable jsx-a11y/anchor-is-valid */

import '../CardDetailCapacity/CardDetailCapacity.scss';

import React, { useState } from "react";

interface Props {
  capacityAvailable: string[];
}

export const CardDetailCapacity: React.FC<Props> = ({capacityAvailable}) => {

const [phoneCapacity, setPhoneCapacity] = useState(capacityAvailable[0]);

    const handelClick = (value: string) => {
        setPhoneCapacity(value)
    }

  return (

<div className="capacity">
    <div className="capacity__container">
        <h3 className="capacity__header">Select capacity</h3>
        <div className="capacity__block-btn">
          {capacityAvailable.map((capacity, index) => (
             <a
             className={phoneCapacity === capacity
             ? 'capacity__btn--isActive'
             : 'capacity__btn'}
               href="#"
               key={capacity}
               onClick={(e) => {
                 handelClick(capacity)
                 e.preventDefault();
               }}
             >
                 {capacity}
             </a>
          ))}

        </div>
    </div>
</div>


    )

}
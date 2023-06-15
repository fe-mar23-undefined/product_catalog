/* eslint-disable jsx-a11y/anchor-is-valid */

import '../CardDetailCapacity/CardDetailCapacity.scss';

import { useState } from "react"

export const CardDetailCapacity = () => {

const [phoneCapacity, setPhoneCapacity] = useState('64GB');



    const handelClick = (value: string) => {

        setPhoneCapacity(value)

    }




    return (

<div className="capacity">
    <div className="capacity__container">
        <h3 className="capacity__header">Select capacity</h3>
        <div className="capacity__block-btn">
            <a
            className={phoneCapacity === '64GB'
            ? 'capacity__btn--isActive'
            : 'capacity__btn'}
              href="#"
              onClick={(e) => {
                handelClick('64GB')
                e.preventDefault();
              }}
            >
                64 GB
            </a>
            <a
              className={phoneCapacity === '256GB'
              ? 'capacity__btn--isActive'
              : 'capacity__btn'}
              href="#"
              onClick={(e) =>{
                e.preventDefault();
                handelClick('256GB')
              }}
            >
              256 GB
            </a>
            <a
              className={phoneCapacity === '512GB'
              ? 'capacity__btn--isActive'
              : 'capacity__btn'}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handelClick('512GB')
              }}
            >
              512 GB
              </a>
        </div>
    </div>
</div>


    )

}
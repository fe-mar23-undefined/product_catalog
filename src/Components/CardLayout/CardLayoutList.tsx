
import {useEffect, useState } from 'react';

import { Phone } from '../../types/Phone';
import phones from '../../api/phones.json';

import { CardLayoutDetails } from '../CardLayout/CardLayoutDetails';


export const CardLayoutList = () => {

    const [productData, setProductData] = useState<Phone[]>([]);

    useEffect(() => {
        setProductData(phones)
    }, []);

        return (
            <>
              {productData.map((phone) => (
                <CardLayoutDetails phone={phone} key={phone.id}/>
              ))}
            </>
          );


   }
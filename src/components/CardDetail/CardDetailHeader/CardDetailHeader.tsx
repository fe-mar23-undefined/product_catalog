import React from 'react';
import '../CardDetailHeader/CardDetailHeader.scss';

interface Props {
    title: string;
}


export const CardDetailHeader: React.FC<Props> = ({ title }) => {

    return (
        <div className="product-title">
            <h1 className="product-title__header-title">
              {title}
            </h1>
        </div>

    )

}
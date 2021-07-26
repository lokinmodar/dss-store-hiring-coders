import React, { FunctionComponent } from 'react';

import './index.scss';

interface ProductCardProps {
  name?: string;
  price?: number;
  ean?: React.Key;
  imgURL?: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  name = 'Descrição Padrão',
  price = 0,
  ean = 0,
  imgURL
}) => (
  <article className='cardcontent' key={ean}>
    <figure>
      <img src={imgURL} alt={name} />
      <figcaption>
        {name} - {price}
      </figcaption>
    </figure>
  </article>
);

ProductCard.defaultProps = {
  name: 'Descrição Padrão', // This value is adopted when name prop is omitted.
  price: 0,
  ean: 0,
  imgURL: 'https://picsum.photos/200'
};

export default ProductCard;

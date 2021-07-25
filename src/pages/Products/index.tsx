import React from 'react';

import SectionContainer from '../../components/SectionContainer';
import ProductCard from '../../components/ProductCard';
import jsonData from '../../data/products.json';

import './index.scss';

const Products = (): JSX.Element => {
  const products = JSON.parse(JSON.stringify(jsonData));
  const key = Math.random();

  return (
    <>
      <SectionContainer key={key}>
        <article id='content'>
          <h1>Produtos</h1>
          <section className='productList'>
            {products.map(
              (product: {
                ean: React.Key | null | undefined;
                name: string | undefined;
                price: number | undefined;
                image: string | undefined;
              }) => (
                <>
                  <ProductCard
                    key={product.ean}
                    name={product.name}
                    price={product.price}
                    imgURL={product.image}
                  />
                </>
              )
            )}
          </section>
        </article>
      </SectionContainer>
    </>
  );
};

export default Products;

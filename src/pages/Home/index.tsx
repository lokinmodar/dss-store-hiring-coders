import React from 'react';
import { NavLink } from 'react-router-dom';

import SectionContainer from '../../components/SectionContainer';
import OffersCarousel from '../../components/OffersCarousel';
import ProductCard from '../../components/ProductCard';
import jsonData from '../../database/products.json';

import bflogoHome from '../../images/bflogo.png';

import './index.scss';

const Home = (): JSX.Element => {
  const products = JSON.parse(JSON.stringify(jsonData));
  const key = Math.random();
  return (
    <>
      <SectionContainer className='top' key={key}>
        <article id='content'>
          <NavLink activeClassName='active_option' to='/bfriday'>
            <img src={bflogoHome} alt='Black Friday Logo' id='bflogoHome' />
          </NavLink>

          <OffersCarousel />
        </article>
      </SectionContainer>
      <SectionContainer className='bottom' key={key + 1}>
        <article id='content'>
          <section className='productListHome'>
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
export default Home;

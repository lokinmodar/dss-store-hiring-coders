import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import CustomerSignupForm from '../../components/CustomerSignupForm';
import './index.scss';

const Signup = (): JSX.Element => (
  <>
    <SectionContainer>
      <section id='content'>
        <h1>Cadastro</h1>
        <CustomerSignupForm />
      </section>
    </SectionContainer>
  </>
);
export default Signup;

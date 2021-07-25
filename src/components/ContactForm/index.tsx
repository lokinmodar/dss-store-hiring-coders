import React, { useState } from 'react';

import formValidation from '../../utils/formValidation';

import './index.scss';

const ContactForm = (): JSX.Element => {
  const [inputs, setInputs] = useState({ email: '' });

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    const validation = formValidation(inputs.email);
    if (validation) {
      window.localStorage.setItem('E-mail', JSON.stringify(inputs.email));
      setInputs({ email: '' });
    }
  };

  const handleInputChange = (e: {
    persist: () => void;
    target: { name: string; value: string };
  }): void => {
    e.persist();
    setInputs(() => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Insira seu endereço de e-mail para saber mais:
          <br />
          <input
            type='email'
            name='email'
            placeholder='Digite seu endereço de E-mail'
            onChange={handleInputChange}
            value={inputs.email}
            onFocus={handleInputChange}
            onBlur={handleInputChange}
            title='Preencha este campo.'
            required
          />
        </label>

        <button type='submit'>Enviar!</button>
      </form>
    </article>
  );
};

export default ContactForm;

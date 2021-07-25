import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { FaLinkedin, FaWhatsappSquare, FaGithubSquare } from 'react-icons/fa';

import './index.scss';

const PageFooter: FunctionComponent = () => (
  <footer>
    <section id='cont'>
      <div id='left'>
        <Link
          to='/linkedin'
          target='_blank'
          rel='noopener noreferrer'
          title='Clique aqui para entrar em contato pelo LinkedIn.'
        >
          <FaLinkedin className='fb' />
        </Link>
        <Link
          to='/whatsapp'
          target='_blank'
          rel='noopener noreferrer'
          title='Clique aqui para enviar uma mensagem para mim.'
        >
          <FaWhatsappSquare className='wpp' />
        </Link>
      </div>
      <div id='center'>
        <p id='copy'>©{new Date().getFullYear()}- Dante Souza e Souza</p>
        <p id='mail'>dsouzaesouza@gmail.com</p>
      </div>
      <div id='right'>
        <div>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            to='/repo'
            title='Cique para acessar o repositório no Github!'
          >
            <FaGithubSquare className='git' />
          </Link>
        </div>
      </div>
    </section>
  </footer>
);

export default PageFooter;

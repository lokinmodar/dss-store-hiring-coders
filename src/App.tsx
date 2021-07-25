import React from 'react';
import { Helmet } from 'react-helmet';
import Favicon from './images/logo.svg';

import './App.scss';
import Routes from './routes';

export default function App(): JSX.Element {
  return (
    <>
      {/* <section className='App'> */}
      <Helmet>
        <title>DSS Store</title>
        <link rel='icon' sizes='192x192' href={Favicon} />
        <link rel='shortcut icon' id='favicon' href={Favicon} />
        <meta charSet='utf-8' />
        <link
          rel='manifest'
          href='./manifest.json'
          content-type='application/json'
        />
        <meta name='theme-color' content='#7c07a5' />
        {/* <!-- Windows Phone --> */}
        <meta name='msapplication-navbutton-color' content='#7c07a5' />
        {/* <!-- iOS Safari --> */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <Routes />
    </>
    /*     </section>
     */
  );
}

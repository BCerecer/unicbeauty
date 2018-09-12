import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import flatten from 'flat';
import scrollToComponent from 'react-scroll-to-component';
import { IntlProvider } from 'react-intl';

import NavBar from '../NavBar';
import Home from '../Home';
import Models from '../Models';
import Workshops from '../Workshops';
import * as locales from '../../locales';


class App extends Component {
  render () {
    return (
      <IntlProvider locale={'en'} messages={flatten(locales['en'])}>
        <div>
          <Helmet titleTemplate="%s &middot; UnicBeauty">
            <html lang={'en'} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fba1c1" />
            <meta name="apple-mobile-web-app-title" content="UnicBeauty" />
            <meta name="application-name" content="UnicBeauty" />
            <meta name="google-site-verification" content="ebvciezxp70dqe2rImRYH8PlhrotjDx0qHrVBxQ8ovU" />
            <meta name="theme-color" content="#ffffff" />
          </Helmet>

        	<NavBar 
          onClickHome={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 500})}
          onClickModels={() => scrollToComponent(this.Models, { offset: -100, align: 'top', duration: 500})}
          onClickWorkshops={() => scrollToComponent(this.Workshops, { offset: 0, align: 'top', duration: 500})}
          />
          <section ref={(section) => { this.Home = section;}}>
            <Home />
          </section>
          <section ref={(section) => { this.Models = section;}}>
            <Models />
          </section>
          <section ref={(section) => { this.Workshops = section;}}>
            <Workshops/>
          </section>
        </div>
      </IntlProvider>
    );
  }
}

export default App;


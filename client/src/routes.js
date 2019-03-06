import React from 'react';
import { Route, Switch } from "react-router-dom";
import createBrowserHistory from  'history/createBrowserHistory';

import App from './App/App';
import HomePage from './Home/homePage.js';
import News from './News/newsPage.js';
import Contacts from './Contacts/contactPage.js';
import AboutUs from './AboutUs/aboutPage.js';
import PovijestZupe from './PovijestZupe/PovijestZupe';

export const history = createBrowserHistory();

export default (
  <Switch>
    <Route render={() => (
      <App history={history}>
        <Route render={() => (
          <div>
            <Route path="/" exact component={HomePage} />
            {/*          ADD ALL ROUTES HERE         */}
            <Route path="/news" exact component={News} />
            <Route path="/contact" exact component={Contacts} />
            <Route path="/about_us" exact component={AboutUs} />
            <Route path="/povijest-zupe" exact component={PovijestZupe} /> 
          </div>
          )}
          />
      </App>
      )}
    />
    {/*<Route component={NotFound} /*/}
  </Switch>
);

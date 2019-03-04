import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'flexboxgrid2/flexboxgrid2.css';

import './index.css';
import './PageLayout/Header.css';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>{routes}</Router>
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import store from './redux/store';

console.log('routes: ', routes);
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

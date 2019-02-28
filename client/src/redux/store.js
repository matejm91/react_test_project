import { createStore } from 'redux'
import zupaApp from './reducers/reducers';

const store = createStore(zupaApp);

export default store;
import { combineReducers } from 'redux';
import { TEST } from '../actions/actions';

function testTestNow(state = "Matej", action) {
  console.log('action: ', action);
  switch (action.type) {
    case TEST:
      return action
    default:
      return state;
  }
}

const zupaApp = combineReducers({
  testTestNow
});

export default zupaApp;
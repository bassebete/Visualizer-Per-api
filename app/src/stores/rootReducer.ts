import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import resources from './resources';
// eslint-disable-next-line import/no-cycle

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    resources,
  });
}

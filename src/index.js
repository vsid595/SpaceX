import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './Components/Reducers';

const store = createStore(
  combineReducers({ counter: CounterReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

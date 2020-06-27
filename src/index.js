import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import BurgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import OrderReducer from './store/reducers/orderReducer';
import { createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer= combineReducers({
    burgerBuilder : BurgerBuilderReducer,
    order : OrderReducer
})
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
  const app=(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app,document.getElementById('root')
);
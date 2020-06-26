import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import reducer from './store/reducers/burgerBuilderReducer';
import { createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
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
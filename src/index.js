import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import reducer from './store/Reducers';
import { createStore } from 'redux';

const store = createStore(reducer);
const app=(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app,document.getElementById('root')
);
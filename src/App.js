import React from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Containers/Layout/Layout'; 
import Checkout from './Containers/Checkout/Checkout';
import { Route, Switch } from 'react-router';
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/Checkout" component={Checkout}/>
          <Route path="/" component={BurgerBuilder}/>
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;

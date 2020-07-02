import React from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Containers/Layout/Layout'; 
import Checkout from './Containers/Checkout/Checkout';
import { Route, Switch } from 'react-router';
import Orders from './Containers/Orders/Orders';
import auth from './Containers/Auth/auth';
import logout from './Containers/Auth/Auth/Logout';
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/Checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/auth" component={auth}/>
          <Route path="/logout" component={logout}/>
          <Route path="/" component={BurgerBuilder}/>
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;

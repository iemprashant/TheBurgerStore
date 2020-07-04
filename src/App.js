import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Containers/Layout/Layout'; 
import Checkout from './Containers/Checkout/Checkout';
import { Route, Switch, withRouter } from 'react-router';
import Orders from './Containers/Orders/Orders';
import auth from './Containers/Auth/auth';
import logout from './Containers/Auth/Auth/Logout';
import * as actions from './store/actions/index'
import { connect } from 'react-redux';
class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
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
};
const mapDispatchToprops=dispatch =>{
  return {
    onTryAutoSignup:()=>dispatch(actions.authCheckState())
  };
}

export default withRouter(connect(null,mapDispatchToprops)(App));

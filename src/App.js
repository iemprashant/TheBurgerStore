import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Containers/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router';
import logout from './Containers/Auth/Auth/Logout';
import * as actions from './store/actions/index'
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
const asyncCheckout = asyncComponent(()=>{
  return import ('./Containers/Checkout/Checkout')
})
const asyncOrders = asyncComponent(()=>{
  return import ('./Containers/Orders/Orders')
})
const asyncAuth = asyncComponent(()=>{
  return import ('./Containers/Auth/auth')
})
class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to ='/'/>
      </Switch>
    );
    if (this.props.isAuthenticated){
      routes=(
        <Switch>
        <Route path="/Checkout" component={asyncCheckout}/>
        <Route path="/orders" component={asyncOrders}/>
        <Route path="/logout" component={logout}/>
        <Route path="/auth" component={auth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to ='/'/>
      </Switch>  
      );
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
};
const mapStateToProps = state =>{
  return {
      isAuthenticated :state.auth.token!==null
}};
const mapDispatchToprops=dispatch =>{
  return {
    onTryAutoSignup:()=>dispatch(actions.authCheckState())
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToprops)(App));

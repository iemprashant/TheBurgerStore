import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Containers/Layout/Layout'; 
import Checkout from './Containers/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router';
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
    let routes = (
      <Switch>
        <Route path="/auth" component={auth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to ='/'/>
      </Switch>
    );
    if (this.props.isAuthenticated){
      routes=(
        <Switch>
        <Route path="/Checkout" component={Checkout}/>
        <Route path="/orders" component={Orders}/>
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

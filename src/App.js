import React, { useEffect,Suspense } from 'react';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Containers/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router';
import logout from './Containers/Auth/Auth/Logout';
import * as actions from './store/actions/index'
import { connect } from 'react-redux';
const Checkout =React.lazy(()=>{
  return import ('./Containers/Checkout/Checkout')
})
const Orders = React.lazy(()=>{
  return import ('./Containers/Orders/Orders')
})
const Auth = React.lazy(()=>{
  return import ('./Containers/Auth/auth')
})
const App= (props)=>{
  const {onTryAutoSignup}=props;
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);
    let routes = (
      <Switch>
        <Route path="/auth" render={(props)=><Auth {...props}/>}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to ='/'/>
      </Switch>
    );
    if (props.isAuthenticated){
      routes=(
        <Switch>
        <Route path="/Checkout" render={(props)=><Checkout {...props}/>}/>
        <Route path="/orders" render={(props)=><Orders{...props}/>}/>
        <Route path="/logout" component={logout}/>
        <Route path="/auth" render={(props)=><Auth{...props}/>}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to ='/'/>
      </Switch>  
      );
    }
    return (
      <div>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>
          {routes}
          </Suspense>
        </Layout>
      </div>
    )
}
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

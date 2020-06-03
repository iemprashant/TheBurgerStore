import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/OrderSummary/CheckoutSummary'
import ContactData from '../ContactData/ContactData';
import { Route } from 'react-router';

export class Checkout extends Component {
    state={
        ingredients:null,
        price:0
        }
    componentWillMount=()=> {
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
    }

    CheckoutCancelHandler=()=>{
        this.props.history.goBack();
    }
    CheckoutContinueHandler=()=>{
        this.props.history.replace(this.props.match.path + '/contact-data')
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutcancel={this.CheckoutCancelHandler}
                    checkoutcontinue={this.CheckoutContinueHandler}/>
                <Route
                path={this.props.match.path + '/contact-data'} 
                render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        )
    }
}

export default Checkout; 

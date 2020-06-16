import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/OrderSummary/CheckoutSummary'
import { connect } from 'react-redux'
import ContactData from '../ContactData/ContactData';
import { Route } from 'react-router';

export class Checkout extends Component {
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
                    ingredients={this.props.ings} 
                    checkoutcancel={this.CheckoutCancelHandler}
                    checkoutcontinue={this.CheckoutContinueHandler}/>
                <Route
                path={this.props.match.path + '/contact-data'}
                component={ContactData}/>
                </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ings: state.ingredients
}};

export default connect(mapStateToProps,null)(Checkout);
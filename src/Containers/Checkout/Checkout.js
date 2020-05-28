import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/OrderSummary/CheckoutSummary'

export class Checkout extends Component {
    state={
        ingredients:{
            salad:1,
            cheese:1,
            meat:1,
            bacon:1
        }
    }
    CheckoutCancelHandler=()=>{
        this.props.history.goBack();
    }
    CheckoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data')
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutcancel={this.CheckoutCancelHandler}
                    checkoutcontinue={this.CheckoutContinueHandler}/>
            </div>
        )
    }
}

export default Checkout; 

import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/OrderSummary/CheckoutSummary'
import { connect } from 'react-redux'
import ContactData from '../ContactData/ContactData';
import { Route ,Redirect} from 'react-router';
import * as actions from '../../store/actions/actionTypes'

export class Checkout extends Component {

    CheckoutCancelHandler=()=>{
        this.props.history.goBack();
    }
    CheckoutContinueHandler=()=>{
        this.props.history.replace(this.props.match.path + '/contact-data')
    }
    render() {
        let summary = <Redirect to="/"/>
        if(this.props.ings){
            const purchasedRedirect= this.props.purchased?<Redirect to="/"/>:null;
            summary=(
                    <div>
                        {purchasedRedirect}
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
        return summary;
    }
}
const mapStateToProps = state =>{
    return {
        ings: state.burgerBuilder.ingredients,
        purchased:state.order.purchased
}};

export default connect(mapStateToProps)(Checkout);
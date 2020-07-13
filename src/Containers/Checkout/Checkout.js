import React from 'react'
import CheckoutSummary from '../../Components/Order/OrderSummary/CheckoutSummary'
import { connect } from 'react-redux'
import ContactData from '../ContactData/ContactData';
import { Route ,Redirect} from 'react-router';

const Checkout=props=>{

    const CheckoutCancelHandler=()=>{
        props.history.goBack();
    }
    const CheckoutContinueHandler=()=>{
        props.history.replace(props.match.path + '/contact-data')
    }
        let summary = <Redirect to="/"/>
        if(props.ings){
            const purchasedRedirect= props.purchased?<Redirect to="/"/>:null;
            summary=(
                    <div>
                        {purchasedRedirect}
                        <CheckoutSummary 
                        ingredients={props.ings} 
                        checkoutcancel={CheckoutCancelHandler}
                        checkoutcontinue={CheckoutContinueHandler}/>
                        <Route
                            path={props.match.path + '/contact-data'}
                            component={ContactData}/>
                    </div>
            )
        }
        return summary;
    }
const mapStateToProps = state =>{
    return {
        ings: state.burgerBuilder.ingredients,
        purchased:state.order.purchased
}};

export default connect(mapStateToProps)(Checkout);
import React, { Fragment, Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
   componentWillUpdate(){
    console.log('oswillupdate')
   }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            igKey => {
                return (
                    <li key= {igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li>
                )   
            });
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Total Price:</strong>{this.props.price.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType="Success"clicked={this.props.continue}>CONTINUE</Button>

            </Fragment>
        )
    }
};

export default OrderSummary;



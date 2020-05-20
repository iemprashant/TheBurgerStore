import React, { Component, Fragment } from 'react'
import Burger from '../../Components/Burger/Burger';
import Buildcontrols from '../../Components/Burger/BuildControls/buildcontrols';

const INGREDIENTS_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component {

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable : false
    }
    
    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addingredienthandler=(type)=>{
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]=this.state.ingredients[type]+1;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({totalPrice:newPrice , ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    };
    removeingredienthandler=(type)=>{
        const updatedIngredients = {...this.state.ingredients};
        if(this.state.ingredients[type]<=0){
            return;
        }
        updatedIngredients[type]=this.state.ingredients[type]-1;
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({totalPrice:newPrice , ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }; 

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //{salad:true,meat:false...like this we will get}
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <Buildcontrols 
                ingredientAdded={this.addingredienthandler}
                ingredientRemoved={this.removeingredienthandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;

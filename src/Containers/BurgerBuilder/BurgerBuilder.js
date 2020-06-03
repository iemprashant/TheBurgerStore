import React, { Component, Fragment } from 'react'
import Burger from '../../Components/Burger/Burger';
import Buildcontrols from '../../Components/Burger/BuildControls/buildcontrols';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import Spinner from './../../Components/UI/Spinner/Spinner'
const INGREDIENTS_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {

    state={
        ingredients:null,
        totalPrice:4,
        purchasable : false,
        purchasing : false,
        loading:false
    }
    componentDidMount(){
        axios.get('/ingredients.json')
        .then(response =>{
            this.setState({ingredients:response.data})
        })
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
    purchasablehandler=()=>{
        this.setState({purchasing:true})
    }
    cancelPurchasehandler=()=>{
        this.setState({purchasing:false})
    }
    continuePurchasehandler=()=>{
        // this.setState({loading:true})
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Max Schwarzmüller',
        //         address: {
        //             street: 'Teststreet 1',
        //             zipCode: '41351',
        //             country: 'Germany'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json',order).then(Response =>{
        //     this.setState({loading : false})
        // })
        const queryParms=[];
        for(let i in this.state.ingredients){
                queryParms.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.ingredients[i]))
        }
        queryParms.push('price='+this.state.totalPrice);
        const queryString=queryParms.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?' + queryString

        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //{salad:true,meat:false...like this we will get}
        let ordersum=null;
        let burger=<Spinner/>
        if(this.state.ingredients){
            burger=(
                <Fragment>
                    <Burger ingredients={this.state.ingredients}/>
                    <Buildcontrols 
                    ingredientAdded={this.addingredienthandler}
                    ingredientRemoved={this.removeingredienthandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchasablehandler}/>
                </Fragment>
            );
            ordersum=<OrderSummary 
                ingredients={this.state.ingredients}
                cancel={this.cancelPurchasehandler}
                continue={this.continuePurchasehandler}
                price={this.state.totalPrice}/>;
        }
        if(this.state.loading){
            ordersum=<Spinner/>
        }
        return (
            <Fragment>
                <Modal show ={this.state.purchasing} modalclose={this.cancelPurchasehandler}>
                    {ordersum}
                </Modal>
                {burger}
            </Fragment>
        );
    }
}

export default BurgerBuilder;

import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'; 
import Burger from '../../Components/Burger/Burger';
import Buildcontrols from '../../Components/Burger/BuildControls/buildcontrols';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import Spinner from './../../Components/UI/Spinner/Spinner'
import * as actionTypes from '../../store/Actions'
const INGREDIENTS_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {

    state={
        totalPrice:4,
        purchasable : false,
        purchasing : false,
        loading:false
    }
    componentDidMount(){
        // axios.get('/ingredients.json')
        // .then(response =>{
        //     this.setState({ingredients:response.data})
        // })
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
    purchasablehandler=()=>{
        this.setState({purchasing:true})
    }
    cancelPurchasehandler=()=>{
        this.setState({purchasing:false})
    }
    continuePurchasehandler=()=>{
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
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //{salad:true,meat:false...like this we will get}
        let ordersum=null;
        let burger=<Spinner/>
        if(this.props.ings){
            burger=(
                <Fragment>
                    <Burger ingredients={this.props.ings}/>
                    <Buildcontrols 
                    ingredientAdded={this.props.onIngredientsAdded}
                    ingredientRemoved={this.props.onIngredientsRemoved}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchasablehandler}/>
                </Fragment>
            );
            ordersum=<OrderSummary 
                ingredients={this.props.ings}
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
const mapStateToProps = state=>{
    return{
        ings: state.ingredients 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onIngredientsAdded:(ingName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName: ingName}),
        onIngredientsRemoved:(ingName)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName: ingName}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);

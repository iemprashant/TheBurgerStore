import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'; 
import Burger from '../../Components/Burger/Burger';
import Buildcontrols from '../../Components/Burger/BuildControls/buildcontrols';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import Spinner from './../../Components/UI/Spinner/Spinner'
import * as bbaction from '../../store/actions/index'


class BurgerBuilder extends Component {

    state={
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
         return sum > 0 ;
    }
    purchasablehandler=()=>{
        this.setState({purchasing:true})
    }
    cancelPurchasehandler=()=>{
        this.setState({purchasing:false})
    }
    continuePurchasehandler=()=>{
        this.props.history.push('/checkout')
    }

    render() {
        
    console.log(this.props.price);
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
                    price={this.props.price}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchasablehandler}/>
                </Fragment>
            );
            ordersum=<OrderSummary 
                ingredients={this.props.ings}
                cancel={this.cancelPurchasehandler}
                continue={this.continuePurchasehandler}
                price={this.props.price}/>;
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
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onIngredientsAdded:(ingName)=>dispatch(bbaction.addIngredient(ingName)),
        onIngredientsRemoved:(ingName)=>dispatch(bbaction.removeIngredient(ingName)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);

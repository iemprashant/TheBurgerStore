import React, {Fragment, useEffect, useState } from 'react'
import {connect} from 'react-redux'; 
import Burger from '../../Components/Burger/Burger';
import Buildcontrols from '../../Components/Burger/BuildControls/buildcontrols';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from './../../Components/UI/Spinner/Spinner'
import * as bbaction from '../../store/actions/index'


const BurgerBuilder= props=>{

    const [purchasing,setPurchasing]=useState(false);

    useEffect(() => {
        props.onInitIngredients();
    }, [])

    const updatePurchaseState =(ingredients)=> {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
         return sum > 0 ;
    }
    const purchasablehandler=()=>{
        if(props.isAuthenticated){
            setPurchasing(true);
        }else{
            props.onSetAuthRedirectPath('/Checkout');
            props.history.push('/auth');
        }
        
    }
    const cancelPurchasehandler=()=>{
        setPurchasing(false);
    }
    const continuePurchasehandler=()=>{
        props.onInitPurchase();
        props.history.push('/checkout');
    }
        const disabledInfo = {
            ...props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //{salad:true,meat:false...like this we will get}
        let ordersum=null;
        let burger=<Spinner/>
        if(props.ings){
            burger=(
                <Fragment>
                    <Burger ingredients={props.ings}/>
                    <Buildcontrols 
                    ingredientAdded={props.onIngredientsAdded}
                    ingredientRemoved={props.onIngredientsRemoved}
                    disabled={disabledInfo}
                    price={props.price}
                    purchasable={updatePurchaseState(props.ings)}
                    ordered={purchasablehandler}
                    isAuth={props.isAuthenticated}/>
                </Fragment>
            );
            ordersum=<OrderSummary 
                ingredients={props.ings}
                cancel={cancelPurchasehandler}
                continue={continuePurchasehandler}
                price={props.price}/>;
        }
        return (
            <Fragment>
                <Modal show ={purchasing} modalclose={cancelPurchasehandler}>
                    {ordersum}
                </Modal>
                {burger}
            </Fragment>
        );
    }
const mapStateToProps = state=>{
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        isAuthenticated :state.auth.token!==null
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onIngredientsAdded:(ingName)=>dispatch(bbaction.addIngredient(ingName)),
        onIngredientsRemoved:(ingName)=>dispatch(bbaction.removeIngredient(ingName)),
        onInitIngredients:()=>dispatch(bbaction.initIngredient()),
        onInitPurchase:()=>dispatch(bbaction.purchaseInit()),
        onSetAuthRedirectPath:(path)=>dispatch(bbaction.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);

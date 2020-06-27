import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
    };
};
export const purchaseBurgerStart = (orderData)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START
    }
}
export const purchaseBurger = (orderData)=>{
    return dispatch =>{
        dispatch(purchaseBurgerStart());
        axios.post( 'https://burger-app-d40ab.firebaseio.com/orders.json', orderData)
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data.name,orderData))
            } )
            .catch( error => {
                console.log('ordercancel')
            } );
    };
};
export const purchaseInit = ()=>{
    return {
        type:actionTypes.PURCHASE_INIT
    }
}
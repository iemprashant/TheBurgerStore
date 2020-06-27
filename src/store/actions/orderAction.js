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
export const fetchOrderSuccess = (orders)=>{
    return{
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    };
};
export const fetchOrderStart = ()=>{
    return {
        type:actionTypes.FETCH_ORDERS_START
    }
}
export const fetchOrder = ()=>{
    return dispatch=>{
        dispatch(fetchOrderStart())
        axios.get( 'https://burger-app-d40ab.firebaseio.com/orders.json')
        .then( response => {
            const fetchedOrders=[];
            for (let key in response.data){
                fetchedOrders.push({
                    ...response.data[key]
                    , id: key
                });
            }
            console.log(fetchedOrders);
            dispatch(fetchOrderSuccess(fetchedOrders))
        } )
        .catch(err=>(console.log(err)));
        
    }
}
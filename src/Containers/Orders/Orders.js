import React, {useEffect} from 'react'
import Order from '../../Components/Order/Order'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../Components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders'

const Orders = props => {
    useEffect(() => {
        props.onFetchOrders(props.token,props.userId);
    },[])

    let orders=<Spinner/>;
    if( !props.loading){
        orders=props.orders.map(order=>(
                        <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                    ))
        }
        
    return orders;
}
const mapStateToProps = state =>{
    return {
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
}};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrders:(token,userId)=>dispatch(actions.fetchOrder(token,userId))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)( withErrorHandler( Orders, axios ) );

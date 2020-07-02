import React, { Component } from 'react'
import Order from '../../Components/Order/Order'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../Components/UI/Spinner/Spinner'
export class Orders extends Component {
    componentDidMount=()=>{
       this.props.onFetchOrders(this.props.token);
    }
    render() {
        let orders=<Spinner/>;
        if( !this.props.loading){
            orders=this.props.orders.map(order=>(
                            <Order 
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price}/>
                        ))
            }
        return orders;
    }
}
const mapStateToProps = state =>{
    return {
        orders:state.order.orders,
        loading:state.order.loading,
        token:state.auth.token
}};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrders:(token)=>dispatch(actions.fetchOrder(token))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);

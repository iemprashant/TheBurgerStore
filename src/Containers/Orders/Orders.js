import React, { Component } from 'react'
import Order from '../../Components/Order/Order'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../Components/UI/Spinner/Spinner'
export class Orders extends Component {
    componentDidMount=()=>{
       this.props.onFetchOrders();
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
        loading:state.order.loading
}};
const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrders:()=>dispatch(actions.fetchOrder())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);

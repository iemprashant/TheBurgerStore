import React, {useEffect} from 'react'
import * as actions from '../../../store/actions/index'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
const Logout= props=>{
    const{onLogout}=props;
    useEffect(() => {
        onLogout();
    },[onLogout])
        return <Redirect to="/"/>;
}
const mapDispatchToProps = dispatch =>{
    return{
        onLogout:()=>dispatch(actions.authLogout())
    };
}
export default connect(null,mapDispatchToProps) (Logout);

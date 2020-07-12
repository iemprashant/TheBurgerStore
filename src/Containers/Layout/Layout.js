import React, { Fragment,useState } from 'react';
import classes from './Layout.module.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';
 const Layout= props=>{
    const [sideDrawerVisible,setSideDrawerVisible]=useState(false);
    const sideDrawerClosehandler=()=>{
        setSideDrawerVisible(false);
    }
    const sideDrawerTogglehandler=()=>{
        setSideDrawerVisible(!sideDrawerVisible);
    }
        return(
        <Fragment>
            <Toolbar 
            isAuth ={props.isAuthenticated}
            drawerToggleClicked= {sideDrawerTogglehandler} />
            <SideDrawer
            isAuth ={props.isAuthenticated}
            open ={sideDrawerVisible} closed={sideDrawerClosehandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
        )
}
const mapStateToProps = state =>{
    return {
        isAuthenticated :state.auth.token!==null
}};

export default connect(mapStateToProps,null) (Layout);
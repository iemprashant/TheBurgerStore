import React, { Fragment, Component } from 'react';
import classes from './Layout.module.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state={
        showSideDrawer: false
    }
    sideDrawerClosehandler=()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerTogglehandler=()=>{
        // this.setState( (prevState)=>{
        //     return { showSideDrawer: !prevState.showSideDrawer };
        // })
        this.setState({showSideDrawer:true})
    }
    

    render(){
        return(
        <Fragment>
            <Toolbar drawerToggleClicked= {this.sideDrawerTogglehandler} />
            <SideDrawer open ={this.state.showSideDrawer} closed={this.sideDrawerClosehandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Fragment>
        )
    }
}
    

export default Layout;
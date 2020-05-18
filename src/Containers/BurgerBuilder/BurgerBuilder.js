import React, { Component, Fragment } from 'react'
import Burger from '../../Components/Burger/Burger';
import Buildcontrols from '../../Components/Burger/BuildControls/buildcontrols';

class BurgerBuilder extends Component {

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <Buildcontrols/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;

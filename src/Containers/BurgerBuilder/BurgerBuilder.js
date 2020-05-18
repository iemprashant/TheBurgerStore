import React, { Component, Fragment } from 'react'
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {

    state={
        ingredients:{
            salad:3,
            bacon:0,
            cheese:5,
            meat:3
        }
    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div> Build  Controls</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;

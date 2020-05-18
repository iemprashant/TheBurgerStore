import React from 'react'
import  classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/Burgeringredient'


const Burger= (props) => {
    const transformedIngredients=Object.keys(props.ingredients).map(
        igkey=>{
            return[...Array(props.ingredients[igkey])].map((_,i)=>{
                return <BurgerIngredient key= {igkey+i} type={igkey}/>;
            });
        }
    )

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger

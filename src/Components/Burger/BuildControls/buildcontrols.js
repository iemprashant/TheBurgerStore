import React from 'react'
import classes from './buildcontrols.module.css'
import Buildcontrolcomp from './BuildControlcomp/Buildcontrolcomp';
const controls = [
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type:'bacon'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'},
];
const Buildcontrols=(props)=> {
    return (
        <div className={classes.buildcontrols}>
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map( ctrl =>
            <Buildcontrolcomp
             key={ctrl.label} 
             label={ctrl.label} 
             type={ctrl.type}
             added={()=>props.ingredientAdded(ctrl.type)}
             removed={()=>props.ingredientRemoved(ctrl.type)}
             disabled={props.disabled[ctrl.type]}
             />
            )}
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ?'ORDER NOW':'Sign up to order'}</button>
        </div>
    )
}

export default Buildcontrols

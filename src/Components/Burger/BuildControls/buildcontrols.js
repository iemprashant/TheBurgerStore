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
        </div>
    )
}

export default Buildcontrols

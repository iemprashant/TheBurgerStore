import React from 'react'
import classes from './buildcontrols.module.css'
import Buildcontrolcomp from './BuildControlcomp/Buildcontrolcomp';
const controls = [
    { label: 'Salad', type:'salad'},
    { label: 'Bacron', type:'bacron'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'},
];
const Buildcontrols=(props)=> {
    return (
        <div className={classes.buildcontrols}>
            {controls.map( ctrl =>
            <Buildcontrolcomp key={ctrl.label} label={ctrl.label}/>
            )}
        </div>
    )
}

export default Buildcontrols

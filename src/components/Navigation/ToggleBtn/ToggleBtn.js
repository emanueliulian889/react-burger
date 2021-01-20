import React from 'react';
import classes from './ToggleBtn.module.css';

const toggleBtn = (props) => (
    <div className={classes.DrawerToggle} onClick={props.toggleClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggleBtn;
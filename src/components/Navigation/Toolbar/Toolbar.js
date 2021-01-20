import React from 'react';
import classes from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleBtn from "../ToggleBtn/ToggleBtn";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleBtn toggleClick={props.toolbarClick} />

        <Logo height='80%'/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;
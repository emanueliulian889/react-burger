import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => (
    <div className={classes.SpinnerWrapper}>
        <h1>Loading Data...</h1>
    </div>
);

export default spinner;
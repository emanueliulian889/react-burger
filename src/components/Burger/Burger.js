import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css';
import { withRouter } from 'react-router-dom';

const burger = (props) => {
    console.log(props);
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + '_' + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start add ingredients</p>
    }

    // console.log(transformIngredients);


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>

            {transformIngredients}

            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default withRouter(burger);
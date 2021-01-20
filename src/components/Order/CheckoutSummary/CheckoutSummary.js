import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
      <div className={classes.CheckoutSummary}>
          <h1>Hope it tastes well!</h1>
          <div style={{width: '300px', height: '300px', margin: 'auto'}}>
              <Burger ingredients={props.ingredients} />
          </div>
          <Button btnType="Danger"
                  clicked={props.checkoutCancelled}>CANCEL</Button>
          <Button btnType="Success"
                  clicked={props.checkoutSummary}>CONTINUE</Button>
      </div>
    )
}

export default checkoutSummary;
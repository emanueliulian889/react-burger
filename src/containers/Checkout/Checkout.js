import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
        autoText: 'defaultValue',
    }

    onCheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    onCheckoutSummary = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    // onUpdateText = (event) => {
    //    this.setState({
    //        autoText: event.target.value
    //    })
    //     if(this.state.autoText.length < 0) {
    //         alert('1221')
    //         this.setState({
    //             autoText: 'hello'
    //         })
    //     }
    // }


    // componentWillMount () {
    //     const query = new URLSearchParams( this.props.location.search );
    //     const ingredients = {};
    //     let price = null;
    //     for ( let param of query.entries() ) {
    //         // ['salad', '1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState( { ingredients: ingredients, totalPrice: price } );
    // }

    render() {

        return (
            <div>
                <CheckoutSummary ingredients={this.props.ings}
                 checkoutCancelled={this.onCheckoutCancelledHandler}
                 checkoutSummary={this.onCheckoutSummary} />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
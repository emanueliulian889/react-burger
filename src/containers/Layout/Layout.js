import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import classes from './Layout.module.css'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class layout extends Component {
    state = {
        showSideDrawer: false

    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggle = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar toolbarClick={this.sideDrawerToggle} />
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default layout;
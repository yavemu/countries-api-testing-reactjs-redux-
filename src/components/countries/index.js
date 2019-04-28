import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getCountries as action_getCountries
} from "../../redux/actions"

import Page from "./page";

class Countries extends Component{

    state = {};

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(code) {
        this.props.history.push(`/country/${code}`)
    }

    componentDidMount(){
        this.props.action_getCountries();
    }
    
    render(){
        return (
            <Page countries={this.props.countries} onClick={this.handleClick}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    action_getCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
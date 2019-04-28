import React, { Component } from "react";
import { connect } from "react-redux";
import { 
    getCountryByCode as action_getCountryByCode 
} from "../../redux/actions";

import Page from "./page";

class Country extends Component{

    state = {};

    componentDidMount(){
        this.props.action_getCountryByCode(this.props.match.params.itemId);
    }
    render(){
        return (
            <Page country={this.props.currentCountry}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    action_getCountryByCode,
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);
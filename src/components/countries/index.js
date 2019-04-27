import React, { Component } from "react";
import { connect } from "react-redux";
import { action1, action3 } from "../../redux/actions"

import Page from "./page";

class Countries extends Component{

    state = {};

    componentDidMount(){
        this.props.action1();
        this.props.action3();
    }
    
    render(){
        
        console.log(this.props);
        return (
            <Page />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    action1,
    action3,
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
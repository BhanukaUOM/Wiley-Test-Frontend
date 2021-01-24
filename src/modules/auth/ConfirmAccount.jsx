import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "./ducks";
import { Link, withRouter } from "react-router-dom"


class ConfirmAccount extends Component {
    componentDidMount() {
        const token = new URLSearchParams(this.props.location.search).get("token");
        this.props.authActions.confirmAccount(token)
    }
    render() {
        return (
            <div>
                ConfirmAccount
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        signUp: state.auth.signUp
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ConfirmAccount))



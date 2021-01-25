import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "./ducks";
import { Link, withRouter } from "react-router-dom"


class ConfirmAccount extends Component {
    componentDidMount() {
        const token = new URLSearchParams(this.props.location.search).get("token");
        if (token) {
            this.props.authActions.confirmAccount(token)
        }
    }
    render() {
        return (
            <div style={{ backgroundColor: "#f5f5f5", minHeight: 1000 }}>
                <div id="load">
                    <div>G</div>
                    <div>N</div>
                    <div>I</div>
                    <div>F</div>
                    <div>I</div>
                    <div>R</div>
                    <div>E</div>
                    <div>V</div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        confirmAccount: state.auth.confirmAccount
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



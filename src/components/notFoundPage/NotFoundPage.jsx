import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./NotFoundPage.css";

class NotFoundPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userObj: null
        }
    }
    componentDidMount() {
        const user = localStorage.getItem("user");
        if (user) {
            let userObj = JSON.parse(user)
            this.setState({
                userObj: userObj
            })
        }
    }
    render() {
        const { userObj } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mainbox">
                            <div className="err">4</div>
                            <i className="far fa-question-circle fa-spin"></i>
                            <div className="err2">4</div>
                            <div className="msg">
                                Maybe this page moved? Got deleted? Is hiding out in quarantine?
                                Never existed in the first place?
                                <p>
                                    Let's go {userObj ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Login</Link>} and try from there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFoundPage


import React, { Component } from 'react'

class Dashboard extends Component {
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
            <div className="container" style={{ minHeight: 1000, marginTop: 10 }}>
                <div style={{ paddingTop: 20, backgroundColor: "#f5f5f5" }}>
                    {`Hi... ${userObj && userObj.name}`}

                </div>
            </div>
        )
    }
}

export default Dashboard

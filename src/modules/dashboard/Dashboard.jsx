import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userObj: null
        }
    }
    componentDidMount() {
        let user = localStorage.user
        let userObj = JSON.parse(localStorage.user)

        console.log("componentDidMount ~ user", user)
        console.log("componentDidMount ~ userObj", userObj)
        this.setState({
            userObj: userObj
        })

    }
    render() {
        const { userObj } = this.state
        return (
            <div className="container" style={{ minHeight: 1000 }}>
                <div style={{ paddingTop: 20, backgroundColor: "#f5f5f5" }}>
                    {`Hi... ${userObj && userObj.name}`}

                </div>
            </div>
        )
    }
}

export default Dashboard

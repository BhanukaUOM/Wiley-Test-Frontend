import React, { Component } from 'react'
import history from '../../_helpers/history'

class Home extends Component {
    componentDidMount() {
        history.push("/login")
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Home

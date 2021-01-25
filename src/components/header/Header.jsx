import React from 'react'
import history from '../../_helpers/history'
import { Link } from "react-router-dom"

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login")
}

function Header({ token }) {
    return (
        <nav className="navbar  navbar-dark bg-dark" style={{ backgroundColor: "red" }}>
            <div className="container">
                <Link className="navbar-brand" to="/">Wiley Online Library</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>

                {token && <div className="float-right" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <div className="nav-link logout-label" onClick={logout}>Logout </div>
                        </li>

                    </ul>

                </div>}
            </div>
        </nav>

    )
}

export default Header

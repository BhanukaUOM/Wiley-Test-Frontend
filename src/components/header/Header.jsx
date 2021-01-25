import React from 'react'
import Swal from 'sweetalert2'
import history from '../../_helpers/history'

const logout = () => {
    // alert("logout")
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to logout.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
                timer: 1200,
                timerProgressBar: true,
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                console.log("DOne")
                localStorage.removeItem("token");
                localStorage.removeItem("user");

                history.push("/login")
            })
        }
    })
}

function Header() {
    return (
        <nav className="navbar  navbar-dark bg-dark" style={{ backgroundColor: "red", marginBottom: 10 }}>
            <div className="container">
                <a className="navbar-brand" href="#">Wiley Online Library</a>

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

                <div className="float-right" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <div className="nav-link logout-label" onClick={logout}>Logout </div>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Header

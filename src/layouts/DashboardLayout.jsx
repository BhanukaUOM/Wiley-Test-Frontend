import React from "react";
import { NotificationContainer } from "react-notifications";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import history from "../_helpers/history";

const DashboardLayout = (ViewComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                token: null
            }
        }
        componentDidMount() {
            const token = localStorage.getItem("token");
            if (!token)
                history.push("/login")
            this.setState({
                token: token
            })
        }
        render() {
            const { token } = this.state
            return (
                <div>
                    <Header token={token} />
                    <>
                        <ViewComponent />
                    </>
                    <Footer />
                    <NotificationContainer />

                </div>
            );
        }
    };
};

export default DashboardLayout;

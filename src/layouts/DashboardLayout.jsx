import React from "react";
import { NotificationContainer } from "react-notifications";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import history from "../_helpers/history";

const DashboardLayout = (ViewComponent) => {
    return class extends React.Component {
        componentDidMount() {
            const token = localStorage.token;
            if (!token)
                history.push("/login")
        }
        render() {
            return (
                <div>
                    <Header />
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

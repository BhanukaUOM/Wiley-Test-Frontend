import React from "react";
import { NotificationContainer } from "react-notifications";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const DashboardLayout = (ViewComponent) => {
    return class extends React.Component {
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

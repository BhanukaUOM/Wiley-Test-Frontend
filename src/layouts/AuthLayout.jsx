import React from "react";
import { NotificationContainer } from "react-notifications";
import history from "../_helpers/history";

const AuthLayout = (ViewComponent) => {
    return class extends React.Component {
        componentDidMount() {
            const token = localStorage.getItem("token");

            if (!!token) {
                history.push("/dashboard")
            }
        }
        render() {
            return (
                <div >
                    <>
                        <ViewComponent />
                    </>
                    <NotificationContainer />

                </div>
            );
        }
    };
};

export default AuthLayout;

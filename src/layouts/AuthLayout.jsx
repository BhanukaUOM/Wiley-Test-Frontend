import React from "react";
import { NotificationContainer } from "react-notifications";
import history from "../_helpers/history";

const AuthLayout = (ViewComponent) => {
    return class extends React.Component {
        componentDidMount() {
            const token = localStorage.token;
            if (!!token)
                history.push("/dashboard")
        }
        render() {
            return (
                <div style={{ backgroundColor: 'red' }}>
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

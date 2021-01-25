import React from "react";
import { NotificationContainer } from "react-notifications";
import Header from "../components/header/Header";

const DefaultLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <>
            <ViewComponent />
          </>
          <NotificationContainer />

        </div>
      );
    }
  };
};

export default DefaultLayout;

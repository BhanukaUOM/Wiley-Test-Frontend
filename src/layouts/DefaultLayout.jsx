import React from "react";
import { NotificationContainer } from "react-notifications";

const DefaultLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
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

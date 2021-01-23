import React from "react";

const DefaultLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
              <>
                <ViewComponent />
              </>
        </div>
      );
    }
  };
};

export default DefaultLayout;

import React from "react";
import Loading from "../Loading";

const withLoading = Component => props => {
  if (props.loading) {
    return <Loading />;
  }
  return <Component {...props} />;
};

export default withLoading;

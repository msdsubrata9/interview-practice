import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  return (props) => {
    const isAuth = false;
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth, navigate]);
    return isAuth ? <WrappedComponent {...props} /> : <div></div>;
  };
}

export default withAuth;

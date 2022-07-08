import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import commerce from "../../lib/commerce";

const CallBack = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [jwt, setJwt] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(
      location.pathname.split("/")[location.pathname.split("/").length - 1]
    );
  }, [location]);

  useEffect(() => {
    commerce.customer.getToken(token, true).then((jwt) => {
      setJwt(jwt.jwt);
      setLoading(false)
      // console.log(jwt, "use: jwt");
    });
  }, [token]);
  // console.log(jwt, "info: jwt");

  if (loading) {
    return (
      <SplashScreen />
    );
  }
  else if (localStorage.commercejs_customer_token !== undefined && localStorage.commercejs_customer_token !== null) {
    return (
      <>
        <Navigate replace to="/" />
      </>
    );
  } else if (localStorage.commercejs_customer_token === undefined) {
    return (
      <>
      {console.log("return")}
        <Navigate replace to="/login/error/email_auth" />
      </>
    );
  }
};

export default CallBack;

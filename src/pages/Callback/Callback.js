import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import commerce from '../../lib/commerce';

const CallBack = () => {
  const location = useLocation();
  const [jwt, setJwt] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(
      location.pathname.split('/')[location.pathname.split('/').length - 1]
    );
  }, [location]);

  useEffect(() => {
    commerce.customer.getToken(token, true).then((jwt) => {
      setJwt(() => jwt.jwt);
    //   console.log(jwt);
    });
  }, [token]);

  if (jwt !== null) {
    return (
      <>
        <Navigate replace to="/" />
      </>
    );
  }

  return (
    <>
      <Navigate replace to="/login?error_email_auth" />
    </>
  );
};

export default CallBack;

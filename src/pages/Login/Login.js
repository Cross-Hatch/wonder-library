import {
  Button,
  Container,
  Errortext,
  Form,
  Input,
  Legend,
} from "./Login.style";
import commerce from "../../lib/commerce";
import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [host, setHost] = useState("");
  let params = useParams()

  // const handleSubmit = (email) => email.preventDefault();
  const preventDefault = (email) => {
    email.preventDefault()
    getEmail({key: "Enter", target: {value: email}})
  };

  const handleSubmit = (e) => {
  setHost(document.location.origin)
  console.log(host);
  commerce.customer
    .login(`${e}`, `${host}/login/callback`)
    .then((token) => {
      console.log(token);
    });
  }

  function getEmail(e) {
    if (e.key === "Enter") {
      setEmail(() => e.target.value);

      if (email) {
        handleSubmit(email);
      }
    }
  }

  return (
    <Layout>
      <Container>
        <Form onSubmit={preventDefault}>
          <Legend>Login</Legend>
          <p>You only need your email to login</p>
          <Input
            onKeyUp={(event) => getEmail(event)}
            placeholder="Email"
            type="email"
          />
          <Button type="button" onClick={(event) => getEmail(event)}>Login</Button>
          {params.email_auth === "email_auth" ? <Errortext>Error: Email Authentication Failed</Errortext> : null}
        </Form>
      </Container>
    </Layout>
  );
}

export default Login;

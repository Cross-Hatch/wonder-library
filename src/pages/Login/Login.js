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

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (email) => email.preventDefault();
  commerce.customer
    .login(`${email}`, "http://localhost:3000/login/callback")
    .then((token) => {
      console.log(token);
    });

  function getEmail(e) {
    if (e.key === "Enter") {
      setEmail(() => e.target.value);

      if (email && email.trim() !== "") {
        handleSubmit(email);
      }
    }
  }

  return (
    <Layout>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Legend>Login</Legend>
          <p>You only need your email to login</p>
          <Input
            onKeyUp={(event) => getEmail(event)}
            placeholder="Email"
            type={"email"}
          />
          <Button>Login</Button>
          <Errortext>Error: try again</Errortext>
        </Form>
      </Container>
    </Layout>
  );
}

export default Login;

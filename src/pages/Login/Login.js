import { Container, Form, Input } from "./Login.style";
import commerce from "../../lib/commerce";
import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (email) => email.preventDefault();
  commerce.customer
    .login(`${email}`, "http://localhost:3000/login/callback")
    .then((token) => {
      console.log(token);
    });

  React.useEffect(() => {
    window.addEventListener("submit", (event) => {
      event.preventDefault();
      if (email && email.trim() !== "") {
        handleSubmit(email);
      } else {
      }
    });
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <p>Login</p>
        <Input
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          type={"email"}
        />
      </Form>
    </Container>
  );
}

export default Login;

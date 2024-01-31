import React from "react";
import LoginForm from "./components/loginform";
import ContentBar from "../../components/ContentBar";
function Login() {
  return (
    <ContentBar>
      <h1>Login</h1>
      <LoginForm />
    </ContentBar>
  );
}

export default Login;

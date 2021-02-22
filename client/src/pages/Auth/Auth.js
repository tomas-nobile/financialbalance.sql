import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import logo from "../../assets/png/financial-balance-logo.png";
import LoginForm from "../../components/Auth/LoginForm";
import RegisterForm from "../../components/Auth/RegisterForm";
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className="auth">
      <Image src={logo} />
      <div className="container-form">
        {showLogin ? <LoginForm /> : <RegisterForm />}
      
        <div className="change-form">
        <p>
          {showLogin ? (
            <>
              <span onClick={() => setShowLogin(!showLogin)}>
                Don't you have an account? Sign up
              </span>
            </>
          ) : (
            <>
              
              <span onClick={() => setShowLogin(!showLogin)}>
                Do you have an account? Sign in
              </span>
            </>
          )}
        </p>
      </div>
      </div>
      
    </Container>
  );
}

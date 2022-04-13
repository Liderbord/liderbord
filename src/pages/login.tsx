import React from 'react';
import '../styles/login.css'
import { useMoralis } from "react-moralis";

const FormHeader = (props: any) => (
<h2 id="headerTitle">{props.title}</h2>
);

const Form = (props: any) => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password"/>
        <FormButton title="Log in"/>
    </div>
);

const FormButton = (props: any) => (
    <div id="button" className="row">
        <button>{props.title}</button>
    </div>
);

const FormInput = (props: any) => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>  
);
const OtherMethods = (props: any) => (
    <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
        <Metamask onClick={props.onClick}/>
        </div>
    </div>
);
const Metamask = (props: any) => (
    <div>
        <button onClick={props.onClick} id="metamaskIcon"><img src="https://cdn.worldvectorlogo.com/logos/metamask.svg" height="30" width="30" alt="test" /></button>
        <label>Metamask</label>
    </div>
);

function Login() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    const login = async () => {
        if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
            .then(function (user) {
            console.log("logged in user:", user);
            console.log(user!.get("ethAddress"));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

  return (
      <div id="loginform">
        <FormHeader title="Welcome to Liderbord, please login" />
        <Form />
        <OtherMethods onClick={login}/>
        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
      </div>
  );
}

export default Login;
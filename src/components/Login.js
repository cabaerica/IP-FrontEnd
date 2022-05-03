import React, { useState } from "react";
import ReactDOM from "react-dom";

import '../stylesheets/Login.css';
const Login = () =>  {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="theform">
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <label className="form__label">Username </label>
                    <input className="form__input" type="text" name="uname" placeholder="Username" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="password">
                    <label className="form__label">Password </label>
                    <input className="form__input" type="password" name="pass" required placeholder="Password" />
                    {renderErrorMessage("pass")}
                </div>
                <div className="register">
                    <input type="submit" className="btn btn-outline-success" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="login-form">
                <div className="title">Log in</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
export default Login;
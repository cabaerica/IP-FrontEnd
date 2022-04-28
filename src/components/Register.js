import React, {useState} from 'react';
import './Register.css'

const RegistrationForm = () =>  {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const database = [
        {
            username: "user1",
            email : "user1@yahoo.com"
        },
        {
            username: "user2",
            email: "user2@yahoo.com"
        }
    ];

    const errors = {
        nameExists: "invalid username",
        pass: "password must be the same",
        mail : "email already used"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();


        console.log("---------");
        console.log(document.forms[0]);

        console.log("---------");
        var {username,email,password,passwordVerif} = document.forms[0];

        console.log("---------");
        console.log(username);
        console.log(password);
        console.log(passwordVerif);
        console.log("---------");
        // Find user login info
        const userData = database.find((user) => user.username === username.value || user.email === email.value);

        console.log("---------");
        console.log(userData);
        console.log("---------");
        // Compare user info
        if (userData) {
            if (userData.username === username.value) {
                setErrorMessages({name: "nameExists", message: errors.nameExists});
            }
            else
            {
                setErrorMessages({name: "mail", message: errors.mail});
            }
        } else {
            if (password.value === passwordVerif.value) {
                setIsSubmitted(true);
            }
            else {
                setErrorMessages({name: "pass", message: errors.pass});
            }
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit} name={"register"}>
                <div className="username">
                    <label className="form__label" htmlFor="userName">Username </label>
                    <input className="form__input" type="text" id="userName" placeholder="UserName" name={"username"} required/>
                    {renderErrorMessage("nameExists")}
                </div>
                <div className="firstname">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name" name={"firstname"} required/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input type="text" id="lastName" className="form__input" placeholder="LastName" name={"lastname"} required/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" name={"email"} required/>
                    {renderErrorMessage("mail")}
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" name={"password"}required/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" name={"passwordVerif"} required/>
                    {renderErrorMessage("pass")}
                </div>
            <div className="button-container">
                <input type="submit"></input>
            </div>
            </form>
        </div>
    );

    return(
        <div className="register">
            <div className="register-form">
                <div className="title">Register</div>
                {isSubmitted ? <div>New user created successfully </div> : renderForm}
            </div>
        </div>

    )
}

export default RegistrationForm;
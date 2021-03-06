import { useState, useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { loginUser } from "../../remote/user";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import GLogin from "./golang-google-sign-in.component";
import "./login-form.jsx";
import { ButtonContainer, LoginFormContainer } from "./login-form.jsx";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            let response = await loginUser(email, password);
            if (response.status === 200) {
                console.log("Logged In!!!!!");
                setCurrentUser(response.data.email);
                resetFormFields();
                return;
            }
        } catch (e) {
            let response_code = e.response.status;
            if (response_code === 400) {
                alert("No User Found");
            } else if (response_code === 401) {
                alert("Incorrect Username or Password");
            } else {
                alert("Internal Server Error");
            }
            return;
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <LoginFormContainer>
            <h2>Sign in with your email and your password</h2>
            <form onSubmit={handleLogin}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <ButtonContainer>
                    <Button>Login</Button>
                    <GLogin />
                </ButtonContainer>
            </form>
        </LoginFormContainer>
    );
};

export default SignInForm;

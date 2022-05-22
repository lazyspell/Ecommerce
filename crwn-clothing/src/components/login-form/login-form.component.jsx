import { useState } from "react";
import { loginUser } from "../../remote/user";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            let response = await loginUser(email, password);
            if (response.status === 200) {
                console.log("login Successful");
                resetFormFields();
                return;
            }
        } catch (e) {
            let response_code = e.response.status;
            if (response_code === 401) {
                alert("password or email is invalid");
                return;
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div>
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
                <Button>Login</Button>
            </form>
        </div>
    );
};

export default SignInForm;

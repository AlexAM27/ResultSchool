import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    const validatorConfig = {
        email: {
            isRequired: { message: "Email is required" },
            isEmail: { message: "Email is not correct" }
        },
        password: {
            isRequired: { message: "Password is required" },
            isCapitalSymbol: {
                message: "Password should contain at least one capital letter"
            },
            isContainDigit: {
                message: "Password should contain at least one digit"
            },
            min: {
                message: "Password should contain min 8 symbols",
                value: 8
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(e);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            name="email"
                            value={data.value}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

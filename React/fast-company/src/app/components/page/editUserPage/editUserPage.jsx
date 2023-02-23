import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "../../common/form/textField";
import api from "../../../api";
import { validator } from "../../../utils/validator";

const EditUserPage = () => {
    const { userId } = useParams();
    const history = useHistory();
    const [user, setUser] = useState();
    const [errors, setErrors] = useState({});
    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    useEffect(() => {
        validate();
    }, [user]);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        }
    };

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(user, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        history.goBack();
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {user ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            {/* <SelectField
                    label="Выберите Вашу профессию"
                    defaultOption="Choose..."
                    name={professions}
                    options={professions}
                    onChange={handleChange}
                    value={data.profession}
                    error={errors.profession}
                />
                <RadioField
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "female" },
                        { name: "Other", value: "other" }
                    ]}
                    value={data.sex}
                    name="sex"
                    onChange={handleChange}
                    label="Выберите Ваш пол"
                />
                <MultiSelectField
                    options={qualities}
                    onChange={handleChange}
                    name={qualities}
                    label="Выберите Ваши качества"
                    defaultValue={data.qualities}
                />
                <CheckBoxField
                    value={data.license}
                    onChange={handleChange}
                    name="license"
                    error={errors.license}
                >
                    Подтвердить <a>лицензионное соглашение</a>{" "}
                </CheckBoxField> */}
                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="submit"
                                disabled={!isValid}
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <h2>Loading...</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;

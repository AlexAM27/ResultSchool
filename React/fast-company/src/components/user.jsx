import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ id, users }) => {
    const history = useHistory();

    const getUserById = (id) => {
        return users.find((user) => user._id === id);
    };

    const handleToUsersList = () => {
        history.replace("/users");
    };

    const user = getUserById(id);

    return (
        <>
            <h2>{user ? user.name : "Loading"}</h2>
            <button
                onClick={() => {
                    handleToUsersList();
                }}
            >
                All users
            </button>
        </>
    );
};

User.propTypes = {
    users: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
};

export default User;

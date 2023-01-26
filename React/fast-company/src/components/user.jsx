import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../api";
import _ from "lodash";
import { QualitiesList } from "./qualitiesList";

const User = ({ id }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        API.users.getById(id).then((user) => setUser(user));
    }, [id]);

    const history = useHistory();

    const handleToUsersList = () => {
        history.replace("/users");
    };

    const renderUserInfo = (user) => {
        return (
            <>
                <div>
                    <div className="h1">{user.name}</div>
                    <div className="h4">{`Профессия: ${_.get(
                        user,
                        "profession.name"
                    )}`}</div>
                    <QualitiesList className="h6" qualities={user.qualities} />
                    <div className="h6">{`completedMeetings: ${user.completedMeetings}`}</div>
                    <div className="h3">{`Rate: ${user.rate}`}</div>
                </div>
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

    return <>{user ? renderUserInfo(user) : <h1>Loading</h1>}</>;
};

User.propTypes = {
    id: PropTypes.string.isRequired
};

export default User;

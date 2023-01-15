import React, { useEffect, useState } from "react";
import { Users } from "./components/users";
import API from "./api";
import * as constants from "./utils/constants";

export const App = () => {
    const [usersAmount, setUsersAmount] = useState(0);
    const [users, setUsersList] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => {
            setUsersAmount(data.length);
            setUsersList(data);
        });
    });

    const handleUsersList = (id) => {
        setUsersList((prevState) =>
            prevState.filter((user) => user._id !== id)
        );
    };

    const handleUsersAmount = () => {
        setUsersAmount((prevState) => prevState - 1);
    };

    const deleteUser = (id) => {
        handleUsersList(id);
        handleUsersAmount();
    };

    if (usersAmount <= 0) {
        return (
            <h3>
                <span className={constants.RED_BADGE}>
                    {constants.EMPTY_USERS_LIST_LABEL}
                </span>
            </h3>
        );
    }

    return (
        <div>
            <Users users={users} onDelete={deleteUser} />
        </div>
    );
};

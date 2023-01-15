import React, { useState } from "react";
import { Users } from "./components/users";
import api from "./api";
import * as constants from "./utils/constants";

export const App = () => {
    const usersList = api.users.fetchAll();
    const [usersAmount, setUsersAmount] = useState(usersList.length);
    const [users, setUsersList] = useState(usersList);

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

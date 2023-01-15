import React, { useEffect, useState } from "react";
import { Users } from "./components/users";
import API from "./api";

export const App = () => {
    const [users, setUsersList] = useState([]);
    const handleDelete = (userId) => {
        setUsersList(users.filter((user) => user._id !== userId));
    };

    useEffect(() => {
        API.users.fetchAll().then((data) => {
            setUsersList(data);
        });
    });

    return (
        <div>
            <Users users={users} onDelete={handleDelete} />
        </div>
    );
};

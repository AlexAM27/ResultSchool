import React, { useEffect, useState } from "react";
import { Users } from "./components/users";
import API from "./api";

export const App = () => {
    const [users, setUsersList] = useState([]);
    const handleDelete = (userId) => {
        setUsersList(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsersList(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    useEffect(() => {
        API.users.fetchAll().then((data) => {
            setUsersList(data);
        });
    });

    return (
        <div>
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
        </div>
    );
};

import React from "react";
import * as constants from "../utils/constants";
import { User } from "./user";
import PropTypes from "prop-types";

export const UsersTable = ({ users, onDelete, currentSort, onSort }) => {
    const handleSort = (item) => {
        if (currentSort.iter === item) {
            onSort((prevState) => ({
                ...currentSort,
                order: currentSort.order === "asc" ? "desc" : "asc"
            }));
        } else {
            onSort({ iter: item, order: "asc" });
        }
    };

    return (
        <table className="table">
            <thead style={{ borderBottom: "5px" }}>
                <tr>
                    <th onClick={() => handleSort("name")} scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_NAME}
                    </th>
                    <th scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_QUALITY}
                    </th>
                    <th
                        onClick={() => handleSort("profession.name")}
                        scope="col"
                    >
                        {constants.USERS_TABLE_HEADER_LABEL_PROFESSION}
                    </th>
                    <th
                        onClick={() => handleSort("completedMeetings")}
                        scope="col"
                    >
                        {constants.USERS_TABLE_HEADER_LABEL_MEETINGS}
                    </th>
                    <th onClick={() => handleSort("rate")} scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_RATE}
                    </th>
                    <th onClick={() => handleSort("bookmark")} scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_FAVORITE}
                    </th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User key={user._id} user={user} onDeleteUser={onDelete} />
                ))}
            </tbody>
        </table>
    );
};

UsersTable.propTypes = {
    onDelete: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object),
    onSort: PropTypes.func,
    currentSort: PropTypes.object
};

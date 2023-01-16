import React from "react";
import * as constants from "../utils/constants";
import { User } from "./user";
import PropTypes from "prop-types";

export const UsersTable = ({ users, onDelete, onSort }) => {
    return (
        <table className="table">
            <thead style={{ borderBottom: "5px" }}>
                <tr>
                    <th onClick={() => onSort("name")} scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_NAME}
                    </th>
                    <th scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_QUALITY}
                    </th>
                    <th onClick={() => onSort("profession.name")} scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_PROFESSION}
                    </th>
                    <th onClick={() => onSort("completedMeetings")} scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_MEETINGS}
                    </th>
                    <th onClick={() => onSort("rate")} scope="col">
                        {constants.USERS_TABLE_HEADER_LABEL_RATE}
                    </th>
                    <th onClick={() => onSort("bookmark")} scope="col">
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
    onSort: PropTypes.func
};

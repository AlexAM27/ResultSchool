import React from "react";
import * as constants from "../utils/constants";
import PropTypes from "prop-types";

import { Bookmark } from "./bookmark";
import { QualitiesList } from "./qualitiesList";
import { Table } from "./table";

export const UsersTable = ({
    users,
    onDelete,
    selectedSort,
    onSort,
    onToggleBookMark
}) => {
    const columns = {
        name: { path: "name", name: constants.USERS_TABLE_HEADER_LABEL_NAME },
        quality: {
            name: constants.USERS_TABLE_HEADER_LABEL_QUALITY,
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        profession: {
            path: "profession.name",
            name: constants.USERS_TABLE_HEADER_LABEL_PROFESSION
        },
        completedMeetings: {
            path: "completedMeetings",
            name: constants.USERS_TABLE_HEADER_LABEL_MEETINGS
        },
        rate: { path: "rate", name: constants.USERS_TABLE_HEADER_LABEL_RATE },
        bookmark: {
            path: "bookmark",
            name: constants.USERS_TABLE_HEADER_LABEL_FAVORITE,
            component: (user) => (
                <Bookmark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className={constants.DELETE_BUTTON}
                    onClick={() => onDelete(user._id)}
                >
                    {constants.DELETE_USER_BUTTON_LABEL}
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UsersTable.propTypes = {
    onDelete: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object),
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    onToggleBookMark: PropTypes.func.isRequired
};

import React from "react";
import * as constants from "../utils/constants";
import { Bookmark } from "./bookmark";
import { Qualitie } from "./qualitie";
import PropTypes from "prop-types";

export const User = ({ user, onDeleteUser, onToggleBookMark }) => {
    const renderUserQualities = (user) => {
        return user.qualities.map((quality) => (
            <Qualitie key={quality._id} {...quality} />
        ));
    };

    return (
        <tr>
            <td>{user.name}</td>
            <td>{renderUserQualities(user)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <Bookmark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            </td>
            <td>
                <button
                    className={constants.DELETE_BUTTON}
                    onClick={() => onDeleteUser(user._id)}
                >
                    {constants.DELETE_USER_BUTTON_LABEL}
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    onDeleteUser: PropTypes.func.isRequired,
    user: PropTypes.exact({
        _id: PropTypes.string,
        name: PropTypes.string,
        profession: PropTypes.exact({
            _id: PropTypes.string,
            name: PropTypes.string
        }),
        qualities: PropTypes.arrayOf(
            PropTypes.exact({
                _id: PropTypes.string,
                name: PropTypes.string,
                color: PropTypes.string
            })
        ),
        completedMeetings: PropTypes.number,
        rate: PropTypes.number,
        bookmark: PropTypes.bool
    }),
    onToggleBookMark: PropTypes.func.isRequired
};

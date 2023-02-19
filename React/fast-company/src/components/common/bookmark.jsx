import React from "react";
import PropTypes from "prop-types";

export const Bookmark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
        </button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool
};

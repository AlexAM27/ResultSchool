import React from "react";
import PropTypes from "prop-types";

export const SortArrow = ({ order }) => {
    return (
        <i
            className={
                "bi bi-caret-" + (order === "asc" ? "up" : "down") + "-fill"
            }
        ></i>
    );
};

SortArrow.propTypes = {
    order: PropTypes.string.isRequired
};

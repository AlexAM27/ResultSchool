import React from "react";
import PropTypes from "prop-types";

export const Qualitie = ({ color, name }) => {
    return (
        <div style={{ marginRight: "5px" }} className={`badge bg-${color}`}>
            {name}
        </div>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

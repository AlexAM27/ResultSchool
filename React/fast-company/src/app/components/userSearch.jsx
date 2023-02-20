import React from "react";
import PropTypes from "prop-types";

const UserSearch = ({ value, clearAll, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onFocus={clearAll}
            onChange={onChange}
        />
    );
};

UserSearch.propTypes = {
    value: PropTypes.string,
    clearAll: PropTypes.func,
    onChange: PropTypes.func
};

export default UserSearch;

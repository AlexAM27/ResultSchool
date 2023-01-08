import React from "react";
import PropTypes from "prop-types";

export const Qualitie = ({ color, name, _id }) => {
  return (
    <div
      style={{ marginRight: "5px" }}
      className={`badge bg-${color}`}
      key={_id}
    >
      {name}
    </div>
  );
};

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

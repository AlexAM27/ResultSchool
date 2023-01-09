import React from "react";
import PropTypes from "prop-types";

export const Bookmark = ({ favorite }) => {
  if (favorite) {
    return <i className={"bi bi-balloon-heart-fill"}></i>;
  }

  return <i className={"bi bi-balloon-heart"}></i>;
};

Bookmark.propTypes = {
  favorite: PropTypes.bool.isRequired,
};

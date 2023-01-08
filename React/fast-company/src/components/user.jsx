import React, { useState } from "react";
import * as constants from "../utils/constants";
import { Bookmark } from "./bookmark";
import { Qualitie } from "./qualitie";
import PropTypes from "prop-types";

export const User = (props) => {
  const { user, onDeleteUser } = props;
  const [isFavorite, setFavorite] = useState(user.bookmark);

  const renderUserQualities = (user) => {
    return user.qualities.map((quality) => (
      <Qualitie key={quality._id} {...quality} />
    ));
  };

  const handleFavoriteUser = () => {
    setFavorite((prevState) => !prevState);
  };

  return (
    <tr>
      <td>{user.name}</td>
      <td>{renderUserQualities(user)}</td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <button onClick={handleFavoriteUser}>
          <Bookmark favorite={isFavorite} />
        </button>
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
  
};

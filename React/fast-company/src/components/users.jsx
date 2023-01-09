import React, { useState } from "react";
import * as constants from "../utils/constants";
import { Pagination } from "./pagination";
import { User } from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

export const Users = (props) => {
  const { users } = props;
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  const renderUsersTable = () => {
    return userCrop.map((user) => (
      <User key={user._id} user={user} onDeleteUser={props.onDelete} />
    ));
  };

  return (
    <>
      <table className="table">
        <thead style={{ borderBottom: "5px" }}>
          <tr>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_NAME}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_QUALITY}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_PROFESSION}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_MEETINGS}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_RATE}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_FAVORITE}</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderUsersTable()}</tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

Users.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object)
};

import React from 'react';
import { useState } from 'react';
import api from '../api';
import { createEndingForUserWord } from '../utils/utils';
import * as constants from '../utils/constants';

export const Users = () => {
  const usersList = api.users.fetchAll();
  const [usersAmount, setUsersAmount] = useState(usersList.length);

  const renderUsersBadge = () => {
    return `${usersAmount} ${createEndingForUserWord(usersAmount)} ${constants.USERS_LIST_LABEL_ENDING}`;
  }

  const renderUserQualities = (user) => {
    return user.qualities.map((quality => (
      <div key={quality._id}>{quality.name}</div>
    )))
  }

  const renderUsersTable = () => {
    return (usersList.map(user => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{renderUserQualities(user)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><button>{constants.DELETE_USER_BUTTON_LABEL}</button></td>
      </tr>
    )))
  }

  const handleDeleteUsers = () => {
    setUsersAmount((prevState) => prevState - 1);
  }

  if(usersAmount <= 0) {
    return <span className={constants.RED_BADGE}>{constants.EMPTY_USERS_LIST_LABEL}</span>;
  }

  return (
    <>
      <span className={constants.BLUE_BADGE}>{renderUsersBadge()}</span>

      <table className='table'>
        <thead>
          <tr>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_NAME}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_QUALITY}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_PROFESSION}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_MEETINGS}</th>
            <th scope="col">{constants.USERS_TABLE_HEADER_LABEL_RATE}</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {renderUsersTable()}
        </tbody>
      </table>
    </>
  );
};
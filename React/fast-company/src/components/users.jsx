import React from 'react';
import { useState } from 'react';
import api from '../api';
import { createEndingForUserWord } from '../utils/utils';

export const Users = () => {
  const usersList = api.users.fetchAll();
  const [usersAmount, setUsersAmount] = useState(usersList.length);

  const renderUsersAmountTag = () => {
    if(usersAmount <= 0) {
      return 'Никто с тобой не тусанет';
    } else {
      return `${usersAmount} ${createEndingForUserWord(usersAmount)} туанет с тобой сегодня`;
    }
  }

  const handleDeleteUsers = () => {
    setUsersAmount((prevState) => prevState - 1);
  }

  return (
    <>
      <span>{renderUsersAmountTag()}</span>
      <button onClick={handleDeleteUsers}>Delete</button>
    </>
  );
};
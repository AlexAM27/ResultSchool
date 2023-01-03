import React from 'react';
import * as constants from '../utils/constants';
import { Qualitie } from './qualitie';

export const User = (props) => {

  const {user} = props;

  const renderUserQualities = (user) => {
    return user.qualities.map((quality => (
      <Qualitie key={quality._id} {...quality}/>
    )))
  }

  return (
    <tr>
      <td>{user.name}</td>
      <td>{renderUserQualities(user)}</td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td><button className={constants.DELETE_BUTTON} onClick={() => props.onDelete(user._id)}>{constants.DELETE_USER_BUTTON_LABEL}</button></td>
    </tr>
  );
}
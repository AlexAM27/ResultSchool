import React from 'react';
import { createEndingForUserWord } from '../utils/utils';
import * as constants from '../utils/constants';

export const SearchStatus = ({length}) => {

  const renderUsersBadge = () => {
    return `${length} ${createEndingForUserWord(length)} ${constants.USERS_LIST_LABEL_ENDING}`;
  }

  return <h3><span className={constants.BLUE_BADGE}>{renderUsersBadge()}</span></h3>;


}
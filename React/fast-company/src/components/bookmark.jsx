import React from "react";

export const Bookmark = ({favorite}) => {

  if(favorite) {
    return <i className={'bi bi-balloon-heart-fill'}></i>
  }

  return <i className={'bi bi-balloon-heart'}></i>
}
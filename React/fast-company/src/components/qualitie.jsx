import React from 'react';

export const Qualitie = ({color, name, _id}) => {

  return <div style={{marginRight: '5px'}} className={`badge bg-${color}`} key={_id}>{name}</div>;

}
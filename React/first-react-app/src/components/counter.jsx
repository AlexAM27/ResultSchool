import React, {useState}  from 'react';

export const Counter = (props) => {

  const [value, setValue] = useState(props.value);
  
  const formatValue = () => {
    return value === 0 ? 'empty' : value;
  }

  const getBadgeClasses = () => {
    let spanClasses = 'badge m-2 ';
    spanClasses += value === 0 ? 'bg-warning' : 'bg-primary';
    return spanClasses;
  }

  function handleIncrement() {
    setValue((prevState) => prevState + 1);
  }

  const handleDecrement = function() {
    setValue((prevState) => prevState - 1);
  }

  return (<div>
    <span className={getBadgeClasses()}>{formatValue()}</span>
    <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
    <button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>-</button>
  </div>
  );
}
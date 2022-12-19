import React, {useState}  from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

  const formatCounter = () => {
    return counter === 0 ? 'empty' : counter;
  }

  const getBadgeClasses = () => {
    let spanClasses = 'badge m-2 ';
    spanClasses += counter === 0 ? 'bg-warning' : 'bg-primary';
    return spanClasses;
  }

  function handleIncrement() {
    setCounter((prevState) => prevState + 1);
  }

  const handleDecrement = function() {
    setCounter((prevState) => prevState - 1);
  }

  const handleTags = (id) => {
    setTags((prevState) => prevState.filter(el => el !== id));
  }

  const renderTags = () => {
    if(!tags.length) {
      return 'No Tags';
    } else {
      return ( 
        tags.map((tag) => (
          <li key={tag} className='btn btn-primary btn-sm m-2' onClick={() => handleTags(tag)}>
            {tag}
          </li>
        ))
      );
    }
  }
  

  return (<>
    <ul>{renderTags()}</ul>
    <span className={getBadgeClasses()}>{formatCounter()}</span>
    <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
    <button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>-</button>
  </>
  );
}
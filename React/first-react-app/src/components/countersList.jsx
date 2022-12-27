import React, { useState } from 'react';
import { Counter } from './counter';

export const CountersList = () => {

  const initialState = [
    {id: 0, value: 0, name: 'Ненужная вещь'},
    {id: 1, value: 4, name: 'Вилка'},
    {id: 2, value: 0, name: 'Ложка'},
    {id: 3, value: 0, name: 'Казинаки'},
    {id: 4, value: 0, name: 'Набор минималиста'},
  ];

  const [counters, setCounters] = useState(initialState);

  const handleCounters = (id) => {
    setCounters((prevState) => prevState.filter((el) => el.id !== id)); 
  };

  const handleReset = () => {
    setCounters(initialState);
  }

  const handleIncrement = (id) => {
    setCounters((prevState) => prevState.map((el) => {
      if(el.id === id) {
        el.value++;
      }
      return el;
    }));
  };

  const handleDecrement = (id) => {
    setCounters((prevState) => prevState.map((el) => {
      if(el.id === id) {
        el.value--;
      }
      return el;
    }));
  };

  return (
    <div className='m-2'>
      {counters.map(count => (
        <Counter 
        key={count.id} 
        {...count} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement} 
        onDelete={handleCounters}/>
      ))}
      <button className="btn btn-primary btn-sm" onClick={handleReset}>Сброс</button>
    </div>
  );
}
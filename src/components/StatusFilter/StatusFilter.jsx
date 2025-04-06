import { useState } from 'react';
import css from './StatusFilter.module.css';

const StatusFilter = ({ setClick, setCompleted }) => {
  const handleClick = () => {
    setClick(click => click + 1);
  };
  const handleCompleted = () => {
    setCompleted(prev => prev + 1);
  };

  return (
    <div className={css.wrapper}>
      <button onClick={() => alert('Hello')}>All</button>
      <button onClick={handleClick}>Active</button>
      <button onClick={handleCompleted}>Completed</button>
    </div>
  );
};
export default StatusFilter;

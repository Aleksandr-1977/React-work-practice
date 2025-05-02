// import { useState } from 'react';
import css from './StatusFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';

const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('active')}>Active</button>
      <button onClick={() => handleFilterChange('completed')}>Completed</button>
    </div>
  );
};
export default StatusFilter;

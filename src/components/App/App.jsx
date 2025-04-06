import { useState } from 'react';
import AppBar from '../AppBar/AppBar';
import TaskList from '../TaskList/TaskList';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <TaskList />
    </div>
  );
};
export default App;

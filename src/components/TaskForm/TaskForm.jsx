import { useId, useState } from 'react';
import css from './TaskForm.module.css';

const TaskForm = ({ onAddTask }) => {
  const [inputTask, setInputTask] = useState('');
  const id = useId();
  const handleChange = evt => {
    setInputTask(evt.target.value);
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (inputTask.trim() === '') {
      alert('Please enter task text');
      return;
    }
    const newTask = {
      id: { id },
      text: inputTask,
      completed: false,
    };
    try {
      await onAddTask(newTask);
      setInputTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        value={inputTask}
        onChange={handleChange}
        className={css.field}
        autoFocus
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
};
export default TaskForm;

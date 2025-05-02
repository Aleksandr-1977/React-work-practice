import { useId, useState } from 'react';
import css from './TaskForm.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [inputTask, setInputTask] = useState('');
  // const id = useId();
  const handleChange = evt => {
    setInputTask(evt.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      addTask({
        id: crypto.randomUUID(),
        completed: false,
        text: form.elements.text.value,
      })
    );
    form.reset();
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

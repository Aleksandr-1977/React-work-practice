// import { useState } from 'react';
import css from './Task.module.css';
import { VscCheckAll } from 'react-icons/vsc';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions';

const Task = ({ task }) => {
  // const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  return (
    <div className={css.wrapper}>
      <input
        className="checked"
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button
        className={clsx(css.btn, {
          [css.btnActive]: task.completed,
        })}
        onClick={handleDelete}
      >
        <VscCheckAll size={24} />
      </button>
    </div>
  );
};
export default Task;

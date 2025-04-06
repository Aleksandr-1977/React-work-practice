import { useState } from 'react';
import css from './Task.module.css';
import { VscCheckAll } from 'react-icons/vsc';
import clsx from 'clsx';

const Task = ({ task, deleteTask }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = evt => {
    setChecked(evt.target.checked);
  };

  return (
    <div className={css.wrapper}>
      <input
        className="checked"
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
      <p className={css.text}>{task.text}</p>
      <button
        className={clsx(css.btn, checked && css.btnchecked)}
        onClick={() => deleteTask(task.id)}
      >
        <VscCheckAll size={24} />
      </button>
    </div>
  );
};
export default Task;

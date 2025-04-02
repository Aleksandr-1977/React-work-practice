import css from './Task.module.css';
import { VscCheckAll } from 'react-icons/vsc';

const Task = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <input className="checked" type="checkbox" checked={task.completed} />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <VscCheckAll size={24} />
      </button>
    </div>
  );
};
export default Task;

import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';

const TaskCounter = () => {
  const tasks = useSelector(state => state.task.items);
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.click += 1;
      }
      return acc;
    },
    { click: 0, completed: 0 }
  );
  return (
    <>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </>
  );
};
export default TaskCounter;

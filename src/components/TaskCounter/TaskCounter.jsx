import css from './TaskCounter.module.css';

const TaskCounter = ({ click, completed }) => {
  return (
    <>
      <p className={css.text}>Active: {click}</p>
      <p className={css.text}>Completed: {completed}</p>
    </>
  );
};
export default TaskCounter;

import css from './TaskForm.module.css';

const TaskForm = () => {
  return (
    <div className={css.form}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </div>
  );
};
export default TaskForm;

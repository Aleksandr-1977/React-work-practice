import { useEffect, useState } from 'react';
import StatusFilter from '../StatusFilter/StatusFilter';
import TaskCounter from '../TaskCounter/TaskCounter';
import css from './AppBar.module.css';

const AppBar = () => {
  const [click, setClick] = useState(0);
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    window.localStorage.setItem('save clicks', click);
  }, [click]);
  useEffect(() => {
    window.localStorage.setItem('save completed', completed);
  }, [completed]);
  return (
    <div className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Task</h2>
        <TaskCounter click={click} completed={completed} />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter setClick={setClick} setCompleted={setCompleted} />
      </section>
    </div>
  );
};
export default AppBar;

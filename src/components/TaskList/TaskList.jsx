import { useEffect, useState } from 'react';
import Task from '../Task/Task';
import css from './TaskList.module.css';
import { getApi, postApi, deleteApi } from '../../APIservice/getApi';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import TaskForm from '../TaskForm/TaskForm';
import AppBar from '../AppBar/AppBar';

const TaskList = () => {
  const [tasks, setTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getApi('task');
        setTask(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleAddTask = async newTask => {
    try {
      setLoading(true);
      const addedTask = await postApi(newTask);
      setTask(prevTask => [...prevTask, addedTask]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async taskId => {
    try {
      setLoading(true);
      await deleteApi(taskId);
      setTask(prevTask => prevTask.filter(task => task.id !== taskId));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <AppBar />
      <TaskForm onAddTask={handleAddTask} />
      <ul className={css.list}>
        {loading && <Loader />}
        {error && <Error />}
        {tasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} deleteTask={handleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;

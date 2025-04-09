import { lazy, Suspense } from 'react';

import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../Pages/RegisterPage/RegisterPage')
);
const TaskPage = lazy(() => import('../../Pages/TaskPage/TaskPage'));

const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="*" element={<b>Not Found</b>} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;

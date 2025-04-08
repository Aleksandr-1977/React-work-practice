import { lazy, Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import TaskList from '../TaskList/TaskList';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../Pages/RegisterPage/RegisterPage')
);

const App = () => {
  return (
    <div className={css.container}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<b>Not Found</b>} />
          </Routes>
        </Suspense>
      </Layout>
      <AppBar />
      <TaskList />
    </div>
  );
};
export default App;

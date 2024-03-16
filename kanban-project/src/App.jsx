import './App.css'
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./styled/lib/appRoutes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "../pages/MainPage/MainPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import SigninPage from "../pages/SigninPage/SigninPage";
import NotFaundPage from "../pages/NotFaundPage/NotFaundPage";
import TaskPage from "../pages/TaskPage/TaskPage";
import ExitPage from "../pages/ExitPage/ExitPage";
import AddTaskPage from '../pages/AddTaskPage/AddTaskPage';

export default function App() {

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />} />
        <Route path={appRoutes.TASK} element={<TaskPage />} />
        <Route path={appRoutes.EXIT} element={<ExitPage />} />
        <Route path={appRoutes.ADD_TASK} element={<AddTaskPage />} />
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFaundPage />} />
    </Routes>
  )
}
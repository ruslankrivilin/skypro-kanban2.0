import './App.css'
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./styled/lib/appRoutes";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "../pages/MainPage/MainPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import SigninPage from "../pages/SigninPage/SigninPage";
import NotFaundPage from "../pages/NotFaundPage/NotFaundPage";
import TaskPage from "../pages/TaskPage/TaskPage";
import ExitPage from "../pages/ExitPage/ExitPage";

export default function App() {
  const [user, setUser] = useState(true);

  function login () {
    setUser(true);
  }

  function logout () {
    setUser(false);
  }

  return (
    <Routes>
      <Route element={<PrivateRoute element={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />} >
          <Route path={appRoutes.TASK} element={<TaskPage/>} />
          <Route path={appRoutes.EXIT} element={<ExitPage  logout={logout}/>} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage  login={login}/>} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFaundPage />} />
    </Routes>
  )
}
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }

  function logout() {
    setUser(null);
    navigate(appRoutes.SIGNIN);
  }

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />} />
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage login={login} />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFaundPage />} />
    </Routes>
  )
}
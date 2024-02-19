import {Outlet, Navigate} from "react-router-dom"
import { appRoutes } from "../../styled/lib/appRoutes"

export default function PrivateRoute({ user }) {
    return user ? <Outlet/> : <Navigate to={appRoutes.SIGNIN}/>
}
import {Outlet, Navigate} from "react-router-dom"
import { appRoutes } from "../../styled/lib/appRoutes"
import { useUser } from "../../hooks/useUser"

export default function PrivateRoute() {
    const {user} = useUser()
    return user ? <Outlet/> : <Navigate to={appRoutes.SIGNIN}/>
}
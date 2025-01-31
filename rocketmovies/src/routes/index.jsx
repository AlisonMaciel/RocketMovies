import {BrowserRouter} from "react-router-dom"

import { AuthRoutes } from "./auth.routes.jsx"
import { AppRoutes } from "./app.routes.jsx"

import { useAuth } from "../hooks/auth.jsx"

export function Routes() {

    const {user} = useAuth()

    return (
        <BrowserRouter>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}
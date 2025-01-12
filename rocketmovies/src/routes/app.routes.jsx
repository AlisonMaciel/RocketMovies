import {Routes, Route, Navigate} from "react-router-dom"

import {Details} from "../pages/Details"
import {Notes} from "../pages/Notes"
import {Profile} from "../pages/Profile"
import {Home} from "../pages/Home"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/notes" element={<Notes/>}/>
            <Route path="/profile" element={<Profile/>}/>

            <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
    )
}
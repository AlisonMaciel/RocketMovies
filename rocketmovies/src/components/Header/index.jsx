import {Container, Profile, Back} from "./styled"

import { useAuth } from "../../hooks/auth.jsx"

import { api } from "../../services/server.js"

import placeholderImage from "../../assets/avatar_placeholder.svg"

export function Header({...rest}) {

    const {user, logout} = useAuth()

    const imageUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImage

    function handleLogout() {

        if(user.id) {
            localStorage.removeItem("@rocketmovies:user")
            delete api.defaults.headers.common["Authorization"];
        }
        logout()
    }
    
    return (
        <Container>
            <h1>RcoketMovies</h1>

            <input 
            type="text"
            {...rest}
            />

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <span onClick={handleLogout}> sair </span>
                </div>
                
            <Back to="/profile">
                <img 
                src={imageUrl}
                alt="foto do usuário" />
            </Back>
            </Profile>
        </Container>
    )
}
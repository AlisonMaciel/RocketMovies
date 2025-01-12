import { useContext, createContext, useState, useEffect } from "react";

import {api} from "../services/server.js"

const AuthContext = createContext({})

function AuthProvider({children}) {

    const [data, setData] = useState({})

       async function signin({email, password}) {

        if(!email || !password) {
            return alert("Preencha todos os campos para continuar")
        }

            try {
                const response = await api.post("/sessions", {email, password})
                const {user, token} = response.data

                setData({user, token})

                api.defaults.headers.common["Authorization"] = `Bearer ${token}`

                if(user && token) {
                    localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
                    localStorage.setItem("@rocketmovies:token", token)

                }

            }catch (error) {
                if(error.response) {
                    alert(error.response.data.message) 
                } else {
                    alert("Não foi possível logar")
                }
            }}

        function logout() {
            localStorage.removeItem("@rocketmovies:user")
            localStorage.removeItem("@rocketmovies:token")

            delete api.defaults.headers.common["Authorization"];

            setData({
                user: null,
                token: null
            })
        }
        
        function signUp({name, email, password}) {

            if(!name || !email || !password) {
                return alert("Preencha todos os campos para continuar")
            }

            try {
                api.post("users", {name, email, password})
                .then(() => {
                    return alert("Usuário criado com sucesso")
                })
            } catch (error) {
                if(error.response) {
                    return alert(error.response.data.message)
                }
            }
        }

        async function updateProfile({user, avatarFile}) {

            try {

                if(avatarFile) {
                    const fileUpload = new FormData()
                    fileUpload.append("avatar", avatarFile)

                    const response = await api.patch("/users/avatar", fileUpload)
                    user.avatar = response.data.avatar
                }
                
                await api.put("/users", user)    
                localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
                
                setData({user, token: localStorage.getItem("@rocketmovies:token")})
                alert("Usuário atualizado com sucesso")              

            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message)
                }
            }

        }
            
         useEffect(() => {
            const user = localStorage.getItem("@rocketmovies:user")
            const token = localStorage.getItem("@rocketmovies:token")

            if(user && token) {
                setData({
                    user: JSON.parse(user),
                    token
                })

                api.defaults.headers.authorization = `Bearer ${token}`
            } else {
                delete api.defaults.headers.common["Authorization"];
            }

         }, [])

    return (
        <AuthContext.Provider value={{
            signin,
            logout,
            signUp,
            updateProfile,
            user: data.user
        }}>
            {children} 
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}

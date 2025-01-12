import { useState } from "react"

import { useNavigate } from "react-router-dom"

import {Container, Form, Img, ButtonLogin, Back} from "./styled"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

import { FiUser } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { FiLock } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"

export function SignUp() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const {signUp} = useAuth()

    function handleSignOut() {
        signUp({name, email, password})
        navigate(-1)
    }
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="E-mail"
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Cadastrar"
                    onClick={handleSignOut}
                />

               <Back to="/">
                <ButtonLogin 
                    title="Voltar para o login"
                    icon={FiArrowLeft}
                />
               </Back>
               
            </Form>

            <Img/>
        </Container>
    )
}
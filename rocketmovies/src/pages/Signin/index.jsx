import { useState } from "react"

import {Container, Form, ButtonCreate, Img, Back} from "./styled"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

import { FiMail } from "react-icons/fi"
import { FiLock } from "react-icons/fi"
import { useAuth } from "../../hooks/auth.jsx"

export function Signin() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {signin} = useAuth()

    function handleSignin({email, password}) {
        signin({email, password})
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail" 
                    type="E-mail" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                    />

                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                    />

                <Button 
                    title="Entrar"
                    onClick={() => handleSignin({email, password})}
                />

                <Back to="/register">
                <ButtonCreate 
                    title="Criar conta"
                />
                </Back>
                
            </Form>

            <Img/>
        </Container>
    )
}
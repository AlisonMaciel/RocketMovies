import {Container, Form, ButtonCreate, Img, Back} from "./styled"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

import { FiMail } from "react-icons/fi"
import { FiLock } from "react-icons/fi"

export function Signin() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail" 
                    type="E-mail" 
                    icon={FiMail}/>

                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={FiLock}/>

                <Button 
                    title="Entrar"
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
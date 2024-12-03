import {Container, Form, Img, ButtonLogin, Back} from "./styled"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import { FiUser } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { FiLock } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"

export function SignUp() {
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
                />
                <Input
                    type="E-mail"
                    placeholder="E-mail"
                    icon={FiMail}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                />

                <Button 
                    title="Cadastrar"
                />

                <Back to="/login">
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
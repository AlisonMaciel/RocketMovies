import {Container, Form, Avatar, Back} from "./styled"

import { Link } from "react-router-dom"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import { FiArrowLeft } from "react-icons/fi"
import { FiCamera } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import { FiMail} from "react-icons/fi"
import { FiLock } from "react-icons/fi"

export function Profile() {
    return (
        <Container>
            <header>
                <Back to="/">

                <ButtonText
                    icon={FiArrowLeft}
                    title="Voltar"
                />
                </Back>
            </header>

            <Avatar>

                <img 
                    src="https://github.com/AlisonMaciel.png" 
                    alt="Foto do usuário" 
                />

                <label htmlFor="avatar">

                    <FiCamera/>

                    <input 
                        type="file"
                        id="avatar"
                    />
                </label>

            </Avatar>
            <Form>

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
                    placeholder="Senha atual"
                    icon={FiLock}
                />

                   <Input
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                />

                <Button
                    title="Salvar"
                />
            </Form>
            
        </Container>
    )
}
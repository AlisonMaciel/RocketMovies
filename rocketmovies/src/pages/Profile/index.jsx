import { useState } from "react"

import {Container, Form, Avatar, Back} from "./styled"

import { useAuth } from "../../hooks/auth"

import placeholderImg from "../../assets/avatar_placeholder.svg"

import { api } from "../../services/server.js"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import { FiArrowLeft } from "react-icons/fi"
import { FiCamera } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import { FiMail} from "react-icons/fi"
import { FiLock } from "react-icons/fi"

export function Profile() {
    const {user, updateProfile} = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState()
    const [password_old, setPassword_old] = useState()
 
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg

    
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password,
            password_old
        }

        const userUpdated = Object.assign(user, updated)
         
        updateProfile({user: userUpdated, avatarFile})
    }
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
                    src={avatar}
                    alt="Foto do usuário" 
                />

                <label htmlFor="avatar">

                    <FiCamera/>

                    <input 
                        type="file"
                        id="avatar"
                        onChange={handleChangeAvatar}
                    />
                </label>

            </Avatar>
            <Form>

                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                   <Input
                    type="E-mail"
                    placeholder="E-mail"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                   <Input
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                   <Input
                    type="password"
                    placeholder="Senha antiga"
                    icon={FiLock}
                    onChange={e => setPassword_old(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>
            
        </Container>
    )
}
import { Container, Content, Back } from "./styled";

import { useState } from "react";

import { useParams } from "react-router-dom";

import { api } from "../../services/server";

import placeholderImg from "../../assets/avatar_placeholder.svg"

import {Header} from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import {Tags} from "../../components/Tags"
import img from "../../assets/Group 7579.svg"
import { FiArrowLeft } from "react-icons/fi";

import ImgClock from "../../assets/Vector (1).svg"
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";

export function Details() {
    const [data, setData] = useState(null)
    const [tags, setTags] = useState([])
    const [user_id, setUser_id] = useState()

    const params = useParams()

    const {user} = useAuth()

    const imagemUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg

    useEffect(() => {
        async function fechtUser() {
            const response = await api.get("/users")
            setUser_id(response.data)
        }
            fechtUser()
    }, [])

    useEffect(() => {
        async function fechtNotes() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data.note)
            setTags(response.data.tags)
            console.log(response.data.tags)
        }
            fechtNotes()
    }, [])

    return (
        <Container>
            <Header placeholder="Pesquisar pelo título"/>

            <Content>
                <Back to="/">
                <ButtonText 
                title="Voltar" 
                icon={FiArrowLeft}
                />
                </Back>
                { data && (
                <>
                <div className="title">
                    <h1>{data.title}</h1>
                    <img src={img} />
                </div>

                <div className="info">
                    <div>
                        <img src={imagemUrl}  />
                        <span>{user_id.name}</span>
                    </div>

                    <div>
                        <img src={ImgClock}  />
                        <span>{data.created_at}</span>
                    </div>
                </div>
                {
                    tags && tags.length > 0 ? tags.map(tag => (
                        <Tags key={tag.id} title={tag.name}/>
                    )) : <Tags title="Nenhuma tag para exibir :)"/>
                }

                <p>{data.description}</p>
                </>
                )}

            </Content>

        </Container>
    )
}
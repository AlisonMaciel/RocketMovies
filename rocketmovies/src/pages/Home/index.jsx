import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Content, StyledTags, Back } from "./styled";

import {Header} from "../../components/Header"
import {ButtonPlus} from "../../components/ButtonPlus"
import {Section} from "../../components/Section"

import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/server";
import { useAuth } from "../../hooks/auth";

export function Home() {
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    const {user} = useAuth()
  
    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fechtNotes() {
            console.log(user.id)
            const response = await api.get(`/notes?user_id=${user.id}&title=${search}`)
            setNotes(response.data)
        }

        if(user?.id) {
            fechtNotes()
        }
    }, [user.id, search])
    
    return (
        <Container>
            <Header 
            placeholder="Pesquisar pelo título"
            onChange={e => setSearch(e.target.value)}
            />
            
            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    <Back to="/notes">
                    <ButtonPlus icon={FiPlus}/>
                    </Back>
                </div>

                <main>
                    {
                    notes ? notes.map(note => (

                    <Section 
                    title={note.title} 
                    key={note.id}
                    onClick={() => handleDetails(note.id)}
                    >
                    <>   
                    <p>{note.description}</p>
                    
                    {note.tags && note.tags.map(tag => (
                        <StyledTags key={tag.id} title={tag.name}/>
                    ))}
                        
                    </> 
                    </Section>

                    )) : <p>Voce nao tem notas para exibir</p>}

                </main>
            </Content>
        </Container>
    )
}
import { useState } from "react"

import { useNavigate } from "react-router-dom"

import {Container, Form, Back } from "./styled"

import {Header} from "../../components/Header"
import {ButtonText} from "../../components/ButtonText"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {Bookmarks} from "../../components/Bookmarks"
import {Addfilm} from "../../components/Addfilme"
import {RemoveFilm} from "../../components/removeFilm"

import { FiArrowLeft } from "react-icons/fi"
import { api } from "../../services/server"

export function Notes() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState()

    const [tag, setTag] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTags() {
        setTag(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleDeleteTags(tagRemove) {
        setTag(tag => tag.filter(tag => tag !== tagRemove))
    }

    async function saveFilm() {
        if(!title) {
            return alert("Preencha o título para proseguir")
        }

        if(!rating) {
            return alert("Favor adicionar uma nota")
        }

        if(newTag) {
            return alert("Favor adicionar as tags ou limpar o campo de tags antes de proseguir.")
        }

        await api.post("/notes", {title, description, rating, tag})
        alert("Nota criada com sucesso")
        navigate("/")
    }

    function removeNote() {
        const isOk = confirm("Tem certeza que deseja mesmo excluir esse filme ?")

        if(isOk) {
           navigate("/")
        }
    }

    return (
        <Container>
            <Header 
                placeholder="Pesquisar pelo título"
            />
            <main>
                <Back to="/">
                <ButtonText
                    icon={FiArrowLeft}
                    title="Voltar"
                />
                </Back>


                <Form>
                    <h1>Novo Filme</h1>
                    <div className="title">
                        <Input
                            type="text"
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                          <Input
                            type="number"
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                            
                        />
                    </div>

                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />
                    
                    <h2>Marcadores</h2>

                        <div className="Bookmarks">
                            {
                                tag && tag.map((tag, index) => (
                                    <Bookmarks
                                    key={index}
                                    value={tag}
                                    onClick={() => handleDeleteTags(tag)}
                                    />
                                ))
                            }
                                              
                        <Bookmarks
                            isNew
                            placeholder="Novo marcador"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTags}
                        />
                        </div>

                    <div className="save-delete">
                    <Addfilm onClick={saveFilm}/>
                    <RemoveFilm onClick={removeNote}/>
                    </div>
                        
                </Form>
            </main>
        </Container>
    )
}
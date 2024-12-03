import {Container, Form, Back } from "./styled"

import {Header} from "../../components/Header"
import {ButtonText} from "../../components/ButtonText"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {Bookmarks} from "../../components/Bookmarks"

import { FiArrowLeft } from "react-icons/fi"

export function Notes() {
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
                    <div>
                        <Input
                            type="text"
                            placeholder="Título"
                        />
                          <Input
                            type="number"
                            placeholder="Sua nota (de 0 a 5)"
                        />
                    </div>

                    <TextArea placeholder="Observações"/>
                    
                    <h2>Marcadores</h2>

                    <Bookmarks
                        isNew
                        placeholder="Novo marcador"
                    />
                        
                </Form>
            </main>
        </Container>
    )
}
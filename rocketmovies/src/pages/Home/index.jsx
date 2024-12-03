import { Container, Content, StyledTags, Back } from "./styled";

import {Header} from "../../components/Header"
import {ButtonPlus} from "../../components/ButtonPlus"
import {Section} from "../../components/Section"

import { FiPlus } from "react-icons/fi";

export function Home() {
    return (
        <Container>
            <Header placeholder="Pesquisar pelo título"/>
            
            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    <Back to="/notes">
                    <ButtonPlus icon={FiPlus}/>
                    </Back>
                </div>

                <main>
                    <Section title="Interestellar">
                        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.</p>

                        <StyledTags title="react.js"/>
                        <StyledTags title="express.js"/>
                        <StyledTags title="node.js"/>
                    </Section>

                    <Section title="Interestellar">
                        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.</p>

                        <StyledTags title="react.js"/>
                        <StyledTags title="express.js"/>
                        <StyledTags title="node.js"/>
                    </Section>

                </main>
            </Content>
        </Container>
    )
}
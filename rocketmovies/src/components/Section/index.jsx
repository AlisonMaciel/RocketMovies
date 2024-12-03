import {Container} from "./styled"

import Img from "../../assets/Group 7579.svg"

export function Section({title, children}) {
    return (
        <Container>
            <h2>{title}</h2>
            <img 
            src={Img}
            alt="Cada estrela representa o quão o usuário ficou satisfeito" />
            {children}
        </Container>
    )
}
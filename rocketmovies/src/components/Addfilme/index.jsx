import {Container} from "./styled"

export function Addfilm({onClick, ...rest}) {
    return (
        <Container>
            <button
             type="button"
             onClick={onClick}
             {...rest}
            >
            Salvar Filme
            </button>
        </Container>
    )
}
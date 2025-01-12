import {Container} from "./styled"

export function RemoveFilm({onClick, ...rest}) {
    return (
        <Container>
            <button
            onClick={onClick}
            {...rest}
            >
                Excluir Filme
            </button>
        </Container>
    )
}
import {Container} from "./styled"

export function Button({title, ...rest}) {
    return (
        <Container
            type="button"
            {...rest}
        >
            {title}
        </Container>
    )
}
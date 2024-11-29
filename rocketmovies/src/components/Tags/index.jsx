import { Container } from "./styled";

export function Tags({title, ...rest}) {
    return (
        <Container
        {...rest}
        >
        {title}
        </Container>
    )
}
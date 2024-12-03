import {Container} from "./styled"

export function ButtonPlus({icon: Icon, ...rest}) {
    return (
        <Container
            type="button"
            {...rest}
        >
            {Icon && <Icon size={20}/>}
            Adicionar filme
        </Container>
    )
}
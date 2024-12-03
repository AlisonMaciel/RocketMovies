import {Container, Profile, Back} from "./styled"

export function Header({...rest}) {
    return (
        <Container>
            <h1>RcoketMovies</h1>

            <input 
            type="text"
            {...rest} />
            <Back to="/profile">
            <Profile>
                <div>
                    <strong>Alison Maciel</strong>
                    <span>sair</span>
                </div>

                <img 
                src="https://github.com/AlisonMaciel.png" 
                alt="foto do usuário" />
            </Profile>
            </Back>
        </Container>
    )
}
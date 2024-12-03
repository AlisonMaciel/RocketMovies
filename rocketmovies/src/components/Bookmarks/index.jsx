import {Container} from "./styled"

import { FiX, FiPlus } from "react-icons/fi"

export function Bookmarks({value, isNew, Onclick, ...rest}) {
    return (
        <Container isNew={isNew}>

            <div className="bookmarks">
                <input
                    type="text"
                    value={value}
                    readOnly={!isNew}
                    {...rest}
                />
                <button
                    type="button"
                    className={isNew ? "button-add" : "button-delete"}
                    {...rest}
                >
                    {isNew ? <FiPlus/> : <FiX/>}
                </button>
            </div>

            <div className="buttons">
                <button
                    type="button"
                    className="delete-movies"
                    {...rest}
                >
                    Excluir filme
                </button>

                <button
                    type="button"
                    className="add-movies"
                    {...rest}
                >
                    Salvar filme
                </button>

            </div>
        </Container>
    )
}
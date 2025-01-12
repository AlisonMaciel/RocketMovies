import {Container} from "./styled"

import { FiX, FiPlus } from "react-icons/fi"

export function Bookmarks({value, isNew, onClick, ...rest}) {
    return (
        <Container isNew={isNew}>
                <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}>
                </input>
                
                <button
                    type="button"
                    onClick={onClick}
                    className={isNew ? "button-add" : "button-delete"}
                    {...rest}
                >
                    {isNew ? <FiPlus/> : <FiX/>}
                </button>

        </Container>
    )
}
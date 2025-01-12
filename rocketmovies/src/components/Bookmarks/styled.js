import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    > input {
        padding: 16px;
        width: 179px;
        height: 56px;
        border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.WHITE}` : `none`};
        background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS. BACKGROUND_GRAY_LIGHT_INPUT };
        border-radius: 10px;
        color:${({theme, isNew}) => isNew ? theme.COLORS.GRAY_LIGHT :theme.COLORS.WHITE};
    }

    > button {
        border:none;
        background-color: transparent;
        font-size:24px;
        cursor: pointer;
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
        
    .button-delete {
        color: ${({theme}) => theme.COLORS.PINK};
    }
    

`



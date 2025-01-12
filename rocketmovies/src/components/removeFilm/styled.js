import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    > button{
        font-size: 16px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_DARK};
        color: ${({theme}) => theme.COLORS.PINK};
        border: none;
        padding: 16px 0;
        width: 100%;
        text-align: center;
        border-radius: 10px;
        height: 56px;
        cursor: pointer;
    }
`
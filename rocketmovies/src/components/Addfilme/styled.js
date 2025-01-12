import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > button {
        font-size: 16px;
        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
        border: none;
        padding: 16px 0;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        height: 56px;
        cursor: pointer;
    }
`


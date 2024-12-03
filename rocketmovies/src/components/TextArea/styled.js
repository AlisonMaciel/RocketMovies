import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;
    padding: 19px 16px;
    border-radius: 10px;
    resize: none;
    margin-top: 40px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY_LIGHT_INPUT};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;

    ::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    }
`
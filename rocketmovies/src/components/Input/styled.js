import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 340px;
    height: 56px;
    border-radius: 10px;
    padding-left: 5px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY_LIGHT_INPUT};
    margin-bottom: 8px;
    
    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    }
    
    > input {
        width: 100%;
        height: 56px;
        padding: 16px 0;
        font-size: 16px;
        border: none;
        background-color: transparent;
    }
    ::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    }
`
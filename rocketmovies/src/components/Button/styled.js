import styled from "styled-components";

export const Container = styled.button`
    width: 340px;
    height: 56px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.COLOR_BUTTON};
    text-align: center;
    padding: 16px;
    border: none;
    font-size:  16px;
    cursor: pointer;
    margin: 24px 0 42px;
`

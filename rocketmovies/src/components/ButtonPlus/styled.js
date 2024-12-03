import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 207px;
    height: 48px;
    padding: 25px;
    gap: 8px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.COLORS.COLOR_BUTTON};
    background-color: ${({theme}) => theme.COLORS.PINK};

`
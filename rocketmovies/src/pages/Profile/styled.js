import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        display: flex;
        align-items: center;
        padding-left: 144px;
        width: 100%;
        height: 144px;
        background: rgba(255, 133, 155, 0.05);
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    margin: 64px auto;

    >div:nth-child(3) {
        margin-top: 24px;
    }

    >div:nth-child(4) {
        margin-bottom: 0;
    }
`

export const Avatar = styled.div`
    position: relative;
    width: 186px;
    height: 186px;
    border-radius: 50%;
    margin: -84px auto 64px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        bottom: 1px;
        left: 130px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.COLORS.PINK};
        
        svg {
            width: 20px;
            height: 20px;
            margin-left: 14px;
            margin-top: 13.2px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
        }

        input {
            display: none;
        }

    }

`
export const Back = styled(Link)`
    text-decoration: none;
`
import styled from "styled-components";

import {ButtonText} from "../../components/ButtonText"

import ImgCinematic from "../../assets/Group 15.png"

import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: stretch;
`

export const Form = styled.form`
    max-width: 340px;
    margin:auto 124px; 
    display: flex;
    flex-direction: column;

    > h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 63px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.TEXT_BODY};
        margin: 48px 0;
    }
    > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({theme}) => theme.COLORS.COLOR_P_SIGNIN};
    }


`

export const ButtonLogin = styled(ButtonText)`
    margin: auto;
`

export const Img = styled.div`
    flex: 1;
    background: url(${ImgCinematic}) no-repeat center center ;
    background-size: cover;
`
export const Back = styled(Link)`
    text-decoration: none;
`
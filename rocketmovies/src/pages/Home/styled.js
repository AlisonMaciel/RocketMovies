import styled from "styled-components";

import {Tags} from "../../components/Tags"

import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "header" 
    "content"
    ;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1137px;
    margin: 50px auto 0;
    grid-area: content;
    overflow-y: auto;
    
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    > main {
    margin-top: 37px;
    }
`

export const StyledTags = styled(Tags)`
    background-color: rgba(49, 46, 56, 1);
    margin-left: -5px;
    margin-right: 10px;
`
export const Back = styled(Link)`
    text-decoration: none;
`

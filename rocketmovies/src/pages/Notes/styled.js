import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        width: 100%;
        max-width: 1113px;
        margin: 40px auto;
    }
`

export const Form = styled.form`
    width: 100%;
    max-width: 1113px;

    > div.Bookmarks {  
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_DARK};
        padding: 16px;
        border-radius: 14px;
    }
    > h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
        color:${({theme}) => theme.COLORS.TEXT_BODY};
        margin: 24px 0 40px;
    }

    > h2 {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_P};
        margin: 24px 0 30px;
    }

    > div.title {
        display: flex;
        align-items: center;
        gap: 40px;

        >div:nth-child(1) {
            width: 100%;
        }

        >div:nth-child(2) {
            width: 100%;
        }
    }

    > div.tag-container {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    >div.save-delete {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-top: 14px;
    }
`
export const Back = styled(Link)`
    list-style: none;
    text-decoration: none;
`
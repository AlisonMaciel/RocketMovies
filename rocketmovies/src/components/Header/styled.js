import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    padding: 30px 124px;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_SECTION};

    > h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.PINK};
        }

    > input {
        flex: 1;
        border-radius: 10px;
        min-width: 300px;
        max-width: 1300px;
        border: none;
        padding: 19px 24px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY_LIGHT_INPUT};

        &::placeholder {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
        }
    }

`

export const Profile = styled.div`
    display: flex;
    gap: 9px;

      > div {
        display: flex;
        flex-direction: column;

         strong {
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: ${({theme}) => theme.COLORS.TEXT_BODY};
            margin-top: 16px;
        }

         span {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
            text-align: end;
        }

    }

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
    
`
export const Back = styled(Link)`
    text-decoration: none;
`
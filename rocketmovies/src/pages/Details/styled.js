import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1137px;
    height: 600px;
    margin: 40px auto;
    overflow-y: auto;
    padding: 30px;
    
    .title {
        display: flex;
        align-items: center;
        gap: 19px;
        font-weight: 500;
        line-height: 47px;
        color: ${({theme}) => theme.COLORS.TEXT_BODY};
        margin: 24px 0px;
    }

    .info {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 40px;
        
        >div:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                width: 20px;
                height: 20px;
                border-radius: 50%;
            }

            span {
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: ${({theme}) => theme.COLORS.TEXT_BODY};
            }
        }

        >div:nth-child(2) {
            display: flex;
            align-items: center;
            gap: 8px;  
        }
    }

    > p {
        text-align: justify;
        margin-top: 40px;
    }

`
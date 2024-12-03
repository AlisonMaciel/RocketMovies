import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px;
    background: rgba(255, 133, 155, 0.05);
    border-radius: 16px;
    margin-bottom: 24px;

    > h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.TEXT_BODY};
    }
    
    > img {
        height: 15px;
        margin-top: 8px;
        margin-bottom: 15px;
    }
    
    > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(153, 149, 145, 1);
        margin-bottom: 30px;
        text-align: justify;
    }

`

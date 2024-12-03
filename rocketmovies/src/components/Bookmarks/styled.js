import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .bookmarks {
        display: flex;
        align-items: center;
        width: 100%;
        height: 88px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_DARK};
        padding: 16px;
        border-radius: 8px;

        > input {
            padding: 16px;
            width: 180px;
            height: 56px;
            border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.WHITE}` : `none`};
            background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS. BACKGROUND_GRAY_LIGHT_INPUT };
            border-radius: 10px;
            color:${({theme, isNew}) => isNew ? theme.COLORS.GRAY_LIGHT : theme.COLORS.WHITE};
        }

        > button {
            border:none;
            background-color: transparent;
            font-size:24px;
        }

        .button-add {
            color: ${({theme}) => theme.COLORS.ORANGE};
        }
        
        .button-delete {
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    > .buttons {
        width:100%;
        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 10px;
        
        .delete-movies {
            width:536px;
            height:56px;
            padding: 16px;
            border-radius:10px;
            border:none;
            font-size:16px;
            cursor: pointer;
            background-color: #0D0C0F;
            color: ${({theme}) => theme.COLORS.PINK};
        }

        .add-movies {
            width:536px;
            height:56px;
            border:none;
            border-radius:10px;
            padding: 16px;
            font-size:16px;
            cursor: pointer;
            background-color: ${({theme}) => theme.COLORS.PINK};
            color:${({theme}) => theme.COLORS.BACKGROUND_TAG};
        }
    }
`



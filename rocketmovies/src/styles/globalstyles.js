import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
       background-color: ${({theme}) => theme.COLORS.BACKGROUND_BODY};
    }
    
    body,  input, textarea, button, a  {
        font-family: "Roboto", serif;
    }
`
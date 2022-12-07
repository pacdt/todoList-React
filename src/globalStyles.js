import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500&display=swap');
    *{
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background: rgb(82,2,18);
        background: linear-gradient(18deg, rgba(82,2,18,1) 0%, rgba(220,20,60,1) 100%);
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        overflow-x: hidden
    }
`;

export default GlobalStyle;

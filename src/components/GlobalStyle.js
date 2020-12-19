import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #0A0908;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
} 

body{
    background: #E9E0D5;
    overflow-x: hidden;
}
button{
    cursor: pointer;
    padding: 0.2rem 1rem;
    border-style:none;
    border: 1px solid #22343B;
    border-radius:10px;
    background: #22343B;
    color: white;

    &:focus{
        outline: none;
        box-shadow: none;
    }
}

h3{
    font-weight : bold;
    font-size: 2rem;
    padding: 3rem 3rem;
    color: white;
}


p{
        padding: 3rem 3rem;
        
}

`;

export default GlobalStyle;

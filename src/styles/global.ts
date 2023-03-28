import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
    
    border: none;
    
    scroll-behavior: smooth;
    
    list-style: none;
    
    text-decoration: none;
    text-align: center;

    color: inherit;
  }
  
  html, body{
    width: 100%;
    height: 100%;

    font-family: "Montserrat Alternates", sans-serif;

    background-color: #e0e0e0;
    
    overflow-x: hidden;
}
img{
  width: 100%;
}


`;

export default GlobalCSS;

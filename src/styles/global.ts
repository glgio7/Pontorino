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

font-family: "Montserrat Alternates";
  }
  
  html, body{
    width: 100%;
    height: 100%;

    background-color: #e0e0e0;
    
}
img{
  width: 100%;
}


`;

export default GlobalCSS;

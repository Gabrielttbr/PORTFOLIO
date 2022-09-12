import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
    }
    :root {
        --primary-color: #FC4E00;
        --two-color: #ff7d42;
    }
    .navbar-toggler{
        color: #fff !important ;
       
        span{
            color: #fff !important;
        }
    }
`

export default GlobalStyle;
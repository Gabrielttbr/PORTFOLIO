import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
    }
    :root {
        --primary-color: #FC4E00;
    }
    .navbar-toggler{
        color: #fff !important ;
       
        span{
            color: #fff !important;
        }
    }
    body{
        width:100% !important;
        overflow-x:hidden  !important;
        
    }
    html, body { overflow-x: hidden; }

}

`;

export default GlobalStyle;

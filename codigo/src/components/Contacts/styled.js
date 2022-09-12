import styled from "styled-components";

export const Container = styled.section`
    background: #000;
    min-height: 100vh;
    overflow-x:hidden;
`
export const ContainerConstacts = styled.div`
    max-width:  1024px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items:center;
    @media screen and (max-width: 1024px){
        flex-direction: column ;
    }

`
export const ItemPhrase = styled.div`
    max-width: 50%;
    width: auto;
    margin: 8%;
    border: 1px solid var(--primary-color);
    padding: 30px 10px 30px 10px;
    h1{
        margin:0;
        padding:0 ;
        font-weight: 900;
        font-size:50px;
        color: #fff;
        text-align: center;
    }
    @media screen and (max-width: 1024px){
        display:none ;
    }
`
export const IconContats = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 10%;
    width: 100%;
    @media screen and (max-width: 546px){
        flex-direction: column ;
    }
`
export const ItemIcon = styled.a`
    text-decoration: none ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 20%;
    margin:auto;

    
    #GITHUB{
        height: 85%;
    }
    h1{
        margin-top:  10px;
        font-size: 20px;
        font-weight:900;
        color: #fff;
    }
    @media screen and (max-width: 546px){
        width: 100%!important;
        img{
            width:100px;
        }
    }
`
export const Link = styled.a`
    text-decoration: none;
    color: #fff;
    width: 20%;
    margin: 20px;


`
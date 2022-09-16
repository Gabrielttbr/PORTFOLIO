import styled from "styled-components";

export const Container = styled.div`
    max-width: 320px;
    width: 100%;
    border: 1px solid var(--primary-color);
    margin: 20px ;
`;
export const Header = styled.header`
    max-height: 210px;
    height:100vh !important;
    width: 100%;
    background: #fff ;
    img{
        width:100%;
        height:100%;
    }
    p{
        position: relative;
        top: -100%;
        color: #fff;
        padding: 5px;
        background-color:var(--primary-color);
        width: 24%;
        font-size: 11px;
        font-weight: 800;
        text-align: center;
    }

`
export const Main = styled.main`
    display: flex;
    flex-direction:column;
    height: 290px;
    background:#111111;
    h1{
        font-size: 25px;
        text-align: center;
        color: #fff;
        font-weight: 900;
        padding:10px ;
    }
    p{
        font-size: 14px ;
        margin: 20px;
        color: #fff;
    }
    #large{
        font-size: 22px;
    }
    @media screen and (max-width: 361px){
        height: auto;
        padding-bottom: 10%;
    }
`
export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#111111;

`
export const Button = styled.button`
    width: 90%;
    padding: 10px;
    border-radius: 30px;
    background: var(--primary-color);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 20px;
    font-weight:800;
    `
export const Link = styled.a`
    text-decoration: none;
    width: 90%;

`
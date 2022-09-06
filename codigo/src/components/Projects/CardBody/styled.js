import styled from "styled-components";

export const Container = styled.div`
    max-width: 320px;
    width: 100%;
    border: 1px solid var(--primary-color);
`;
export const Header = styled.header`
    height: 210px;
    width: 100%;
    background: #fff ;
    img{
        width:100%;
        height:100%;
    }
`
export const Main = styled.main`
    height: 200px;
    background:#111111;
    h1{
        font-size: 30px;
        text-align: center;
        color: #fff;
        font-weight: 900;
    }
    p{
        color: #fff;
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
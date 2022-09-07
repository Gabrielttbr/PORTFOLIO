import styled from "styled-components";

export const Container = styled.div`
    background:#000;
    border-top: 1px solid var(--primary-color);
    height:20vh;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width: 100%;
    p{
        width: 100% ;
        color: #fff;
        font-weight:900;
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }
    @media screen and (max-width: 443px){
        p{
            font-size: 12px;
            width: 100% ;
        }
    }
`
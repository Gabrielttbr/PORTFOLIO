import styled from "styled-components";

export const Container = styled.section`
    background:  #000;
    padding-bottom: 20px;
`
export const ContainerChild = styled.section`
    max-width: 1024px;
    min-height: 100vh;
    height: 100%;
    margin: auto;
`
export const SkillSet = styled.div`
    margin: 10px;

`
export const SkillItem = styled.div`
    border: 1px solid var(--primary-color);
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 769px){
       flex-direction: column;
    }
    
    @media screen and(max-width: 538px){
        height: 100vh;
    }
`
export const WrapperItens = styled.div`

    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 540px){
       flex-direction: column;
    }
    
    
    
`
export const itemTitle = styled.div`
    border-right: 6px solid   var(--primary-color);
    width: 100% !important;
    height: 80%;
    padding: 20px;
    display: flex;
    justify-content:center;
    align-items: center;
    max-width: 200px;
    
    h1{
        color: #fff;
        font-weight:900;
        font-size: 25px;
    }
    @media screen and (max-width: 769px){
        border:none;
        height: auto;
        border-bottom: 6px solid  var(--primary-color);
    }
 
    
`
export const item = styled.div`
    max-width: 158px;
    width:20%;
    margin: 10px;
    display:flex;
    flex-direction: column ;
    justify-content:center;
    align-items: center;

    height: 80%;
    p {
        color: #Fff;
        font-weight:900;
        margin: 10px ;
    }
    img{
    
        height: 90px;
    }

    @media screen and (max-width: 540px){
        max-width:100%;
        width:100%;
       img{
        width: 40%;
        height:auto ;
       }
       p{
           font-size: 20px;
       }
    }
    
    
`
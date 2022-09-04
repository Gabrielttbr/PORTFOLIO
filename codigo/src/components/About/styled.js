import styled from "styled-components";



export const Container = styled.section`
    background: #000;

    `
export const ContainerChild = styled.div`
    min-height: 100vh;
    max-width: 1024px;
    margin: auto;
  
`
export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
    position: absolute;
    height: 87%;
    width: 100%;


    @media screen and (max-width: 768px){
       margin: 0;
    }

`
export const Inframe = styled.iframe`
    align-self: center;
    height: 576px;
    width: 100%;
    @media screen and (max-width: 768px){
        height: 315px;
    }
  

`

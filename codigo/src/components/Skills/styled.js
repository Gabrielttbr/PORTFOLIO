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
    margin: 20px;

`
export const SkillItem = styled.div`
    border: 1px solid var(--primary-color);
    height: 25vh;
    width: 100%;
    margin-bottom: 40px;
`
export const itemTitle = styled.div`
    border-right: 3px solid var(--primary-color);
    width: 16.6%;
    height: 95%;
`
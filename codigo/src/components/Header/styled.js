import styled from "styled-components";
import background from "../../assets/BACKGROUND.jpg";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ContainerBackground = styled.div`
  background: rgb(0 0 0 / 20%);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      font-weight: 800;
      text-align: center;
    }
    h1 {
      margin: 0;
      text-align: center;
      font-size: 65px;
      font-weight: 900;
      span {
        color: var(--primary-color);
        text-align: center;
      }
    }
    button {
      border: none;
      background-color: var(--primary-color);
      width: 50%;
      color: #fff;
      padding: 5px;
      font-weight: 800;
      font-size: 17px;
      margin: 10px;
    }
    @media screen and (max-width: 627px) {
      h1 {
        font-size: 50px;
      }
    }
    @media screen and (max-width: 300px) {
      h1 {
        font-size: 42px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

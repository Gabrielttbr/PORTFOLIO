import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
//IMG
import Logotipo from "./../../assets/Logotipo (1).png";
//STYLED
import * as S from "./styled";

const Navegation = () => {
  return (
    <S.FluidContainer>
      <S.Navbar>
        <Navbar expand="lg"  variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={Logotipo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end white">
              <Nav style={{ maxHeight: "180px" }} navbarScroll>
                <Nav.Link id="link" href="#Start">INÍCIO</Nav.Link>
                <Nav.Link href="#About">SOBRE MIM</Nav.Link>
                <Nav.Link href="#Skills">HABILIDADES</Nav.Link>
                <Nav.Link href="#Projects">PROJETOS</Nav.Link>
                <Nav.Link href="#Contatcts">CONTATOS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </S.Navbar>
    </S.FluidContainer>
  );
};
export default Navegation;

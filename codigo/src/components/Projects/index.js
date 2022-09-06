import React from "react";
import TitleSection from "../TitleSection";
import CardBody from "./CardBody";

import * as S from "./styled";
import CloneNetflix from '../../assets/netflix-project.png' 
const Projects = () => {
  return (
    <S.Father>
      <S.Container>
        <TitleSection titleWhite="PROJE" titleOrage="TOS"></TitleSection>
        <S.Wrapper>
          <CardBody title="clone netflix" 
          description="Criei uma aplicação em React, que vai consumir a API do Github, 
          utilizando o Axios para trabalhar com as requisições. Possui uma página inicial com 
          formulário para digitar o user, logo depois que digitado e redirecionado para uma página que faz os getAlls. " 
          image={CloneNetflix} >

          </CardBody>
        </S.Wrapper>
      </S.Container>
    </S.Father>
  );
};

export default Projects;

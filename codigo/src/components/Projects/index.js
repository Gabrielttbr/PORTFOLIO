import React from "react";
import TitleSection from "../TitleSection";
import CardBody from "./CardBody";

import * as S from "./styled";
import GITHUBAPI from "../../assets/github-api.png";
import CloneNetflix from "../../assets/netflix-project.png";
import FORMSTEPRAIZES from "../../assets/Form-steps.png";

const Projects = ({id}) => {
  const getAllProjects = [
    {
      title: "CLONE DA NETFLIX",
      image: CloneNetflix,
      description: `Nesse projeto fiz um clone da Netflix, 
    criei um API com Express, que vai gerenciar os usuários,
    séries, filmes e banners. O front-end foi desenvolvido em React, 
    com página de login, register, home, e a estática de apresentação dela.`,
    },
    {
      title: "GITHUB API",
      image: GITHUBAPI,
      description: `Criei uma aplicação em React, que vai consumir a API do Github, 
    utilizando o Axios para trabalhar com as requisições. Possui uma página inicial com 
    formulário para digitar o user, logo depois que digitado e redirecionado para uma página que faz os getAlls.`,
    },
    {
      title: "FORM STEPS RAÍZES",
      image: FORMSTEPRAIZES,
      description: `Esse formulário de etapas foi um desafio passado para mim,
        desenvolver, ele e uns de muitos que venho desenvolvendo para ONG raízes.
        Fiz ele em react, utilizando Material UI e Bootstrap. Umas das dificuldades 
        foi passar os dados de uma etapa para outra. A outra foi pensar como mostrar esse dados novamente,
        caso o user vontase.`,
    },
  ];
  function getAllCardProject(dace) {
    return dace.map((item, index) => (
      <CardBody key={index}
        title={item.title}
        description={item.description}
        image={item.image}
      ></CardBody>
    ));
  }

  return (
    <S.Father id={id}>
      <S.Container>
        <TitleSection titleWhite="PROJE" titleOrage="TOS"></TitleSection>
        <S.Wrapper>
          {getAllCardProject(getAllProjects)}
        </S.Wrapper>
      </S.Container>
    </S.Father>
  );
};

export default Projects;

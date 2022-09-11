import React, {useEffect }from "react";
import TitleSection from "../TitleSection";
import CardBody from "./CardBody";
import Aos from "aos";

import * as S from "./styled";
import GITHUBAPI from "../../assets/github-api.png";
import CloneNetflix from "../../assets/netflix-project.png";
import FORMSTEPRAIZES from "../../assets/Form-steps.png";

const Projects = ({id}) => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  const getAllProjects = [
    {
      title: "CLONE DA NETFLIX",
      image: CloneNetflix,
      description: `Nesse projeto fiz um clone da Netflix, 
    criei um API com Express, que vai gerenciar os usuários,
    séries, filmes e banners. O front-end foi desenvolvido em React, 
    com página de login, register, home, e a estática de apresentação dela.`,
    link: "https://github.com/Gabrielttbr/client-netflix"
    },
    {
      title: "GITHUB API",
      image: GITHUBAPI,
      description: `Criei uma aplicação em React, que vai consumir a API do Github, 
      utilizando o Axios para trabalhar com as requisições. Possui uma página inicial com 
      formulário para digitar o user, logo depois que digitado e redirecionado para uma página que faz os getAlls.`,
      link:"https://github.com/Gabrielttbr/GITHUB-CONSUMINDO-API"
      },
      {
      title: "FORM STEPS RAÍZES",
      image: FORMSTEPRAIZES,
      description: `Esse formulário de etapas foi um desafio passado para mim,
        desenvolver, ele e uns de muitos que venho desenvolvendo para ONG raízes.
        Fiz ele em react, utilizando Material UI e Bootstrap. Umas das dificuldades 
        foi passar os dados de uma etapa para outra. A outra foi pensar como mostrar esse dados novamente,
        caso o user vontase.`,
      link: "https://github.com/Raizes-Educacional/front-end-react/tree/Gabriel"
    },
  ];
  function getAllCardProject(dace) {
    return dace.map((item, index) => (
      <CardBody  key={index}
        title={item.title}
        description={item.description}
        image={item.image}
        link={item.link}
      ></CardBody>
    ));
  }

  return (
    <S.Father id={id}>
      <S.Container>
        <TitleSection titleWhite="PROJE" titleOrage="TOS"></TitleSection>
        <S.Wrapper  data-aos="fade-left">
          {getAllCardProject(getAllProjects)}
        </S.Wrapper>
      </S.Container>
    </S.Father>
  );
};

export default Projects;

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
    Aos.init({
      duration: 1000,
     
    })
  },[])
  const getAllProjects = [
    {
      title: "CLONE DA NETFLIX",
      image: CloneNetflix,
      description: `
      Desenvolvido em React e Express, possui uma API de controle de usuários, filmes e banners
       e front-end com cadastro de usuário, login, homepage com os conteúdos e estatísticas de reprodução.`,
      link: "https://github.com/Gabrielttbr/client-netflix",
      large: ''
    },
    {
      title: "GITHUB API",
      image: GITHUBAPI,
      description: `É um projeto apenas de front-end, desenvolvido em React, 
      que consome a API do GitHub utilizando o Axios para coletar informações de usuários. 
      A página inicial recebe o nome do usuário através de um formulário, 
      comunica-se com a API e exibe os respectivos dados na tela..`,
      link:"https://github.com/Gabrielttbr/GITHUB-CONSUMINDO-API",
      large: ''
      },
      {
      title: "Gestão do Raízes",
      image: FORMSTEPRAIZES,
      description: `O Raízes é um cursinho popular voluntário que ajuda alunos
       da rede pública de São Paulo a se preparem para provas de escolas técnicas.
         A iniciativa atende anualmente cerca de 100 alunos e, por isso, está 
         digitalizando suas tarefas de backoffice. Dentre as funcionalidades que estão 
         endo desenvolvidas, podemos citar: matrículas, frequência de alunos, grades de aulas,
          avaliação e plataforma de simulação de provas.`,
      link: "https://github.com/Raizes-Educacional/",
    },
  ];
  function getAllCardProject(dace) {
    return dace.map((item, index) => (
      <CardBody  key={index}
        title={item.title}
        description={item.description}
        image={item.image}
        link={item.link}
        large={item.large}
      ></CardBody>
    ));
  }

  return (
    <S.Father id={id}>
      <S.Container>
        <TitleSection titleWhite="PROJE" titleOrage="TOS"></TitleSection>
        
        <S.Wrapper   data-aos="fade-right">
          {getAllCardProject(getAllProjects)}
        </S.Wrapper>
      </S.Container>
    </S.Father>
  );
};

export default Projects;

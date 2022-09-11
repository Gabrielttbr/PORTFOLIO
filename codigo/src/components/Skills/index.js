
import * as S from "./styled";
import TitleSection from "../TitleSection";

import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import JS from "../../assets/JS-TEXT.png";
import REACT from "../../assets/React-icon.svg (1).png";
import TS from "../../assets/TS.png";
import NEST from "../../assets/NEST-ICON.png";
import NODE from "../../assets/NODEJS.png";
import EXPRESS from "../../assets/EXPRESSs.png";
import MYSQL from "../../assets/MYSQL-NOT-FOUND.png";
import GIT from "../../assets/GIT-ICON.png";
import GITHUB from "../../assets/GITHUB.png";
import DOCKER from "../../assets/DOKCER.png";

const Skills = ({id}) => {


  const skillsObj = [
    {
      title: "FRONT-END ",
      Skills: [
        { descripition: "HTML", image: HTML },
        { descripition: "CSS", image: CSS },
        { descripition: "JAVASCRIPT", image: JS },
        { descripition: "TYPESCRIPT", image: TS },
        { descripition: "REACT", image: REACT },
      ],
    },
    {
      title: "BACK-END",
      Skills: [
        { descripition: "NEST", image: NEST },
        { descripition: "NODE", image: NODE },
        { descripition: "EXPRESS", image: EXPRESS },
        { descripition: "MYSQL", image: MYSQL },
      ],
    },
    {
      title: "OUTROS",
      Skills: [
        { descripition: "GIT", image: GIT },
        { descripition: "GITHUB", image: GITHUB },
        { descripition: "DOCKER", image: DOCKER },
      ],
    },
  ];
  const returnSkills = (skills) => {
    return skills.map((item, index) => (
      <S.SkillItem key={index}>
        <S.itemTitle>
          <h1>{item.title}</h1>
        </S.itemTitle>
        <S.WrapperItens>
        {item.Skills.map((item, index) => (
          <S.item key={index}>
              <img src={item.image} alt={item.descripition}></img>
              <p>{item.descripition}</p>
            </S.item>
        ))}
        </S.WrapperItens>
      </S.SkillItem>
    ));
  };
  return (
    <S.Container id={id}>
      <S.ContainerChild>
        <TitleSection titleWhite="HABILI" titleOrage="DADES"></TitleSection>
        <S.SkillSet>{returnSkills(skillsObj)}</S.SkillSet>
      </S.ContainerChild>
    </S.Container>
  );
};
export default Skills;

import * as S from "./styled";
import TitleSection from "../TitleSection";

const Skills = () => {
  return (
    <S.Container>
      <S.ContainerChild>
        <TitleSection titleWhite="HABILI" titleOrage="DADES"></TitleSection>
        <S.SkillSet>
            <S.SkillItem></S.SkillItem>
            <S.SkillItem></S.SkillItem>
            <S.SkillItem></S.SkillItem>
        </S.SkillSet>
      </S.ContainerChild>
    </S.Container>
  );
};
export default Skills;

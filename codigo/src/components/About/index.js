import TitleSection from "../TitleSection";

import * as S from "./styled";

const About = ({id}) => {
  return (
    <S.Container id={id}>
      <S.ContainerChild>
        <TitleSection titleWhite={"SOBRE "} titleOrage={"MIM"}></TitleSection>
        <S.VideoContainer>
            <S.Inframe
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/lXPNf0jYOQ0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></S.Inframe>
        </S.VideoContainer>
      </S.ContainerChild>
    </S.Container>
  );
};
export default About;

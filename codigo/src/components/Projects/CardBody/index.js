import * as S from './styled';

const CardBody = ({title, description, image, link}) => {
    return (
        <S.Container>
            <S.Header>
                <img src={image} alt={title}></img>
            </S.Header>
            <S.Main>
                <h1>{title}</h1>
                <p>{description}</p>
            </S.Main>
            <S.Footer>
                <S.Button> <a href={link} target="_black"></a>SAIBA MAIS</S.Button>
            </S.Footer>
        </S.Container>
    )
}

export default CardBody;
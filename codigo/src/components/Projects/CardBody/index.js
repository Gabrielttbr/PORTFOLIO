import * as S from './styled';

const CardBody = ({title, description, image}) => {
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
                <S.Button>SAIBA MAIS</S.Button>
            </S.Footer>
        </S.Container>
    )
}

export default CardBody;
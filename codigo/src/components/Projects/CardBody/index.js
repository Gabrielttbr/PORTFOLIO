import * as S from './styled';

const CardBody = ({title, description, image, link, fullstack}) => {

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
            <S.Link href={link} target="_black">
                <S.Button>
                    Ver no Github
                </S.Button>
            </S.Link>
            </S.Footer>
        </S.Container>
    )
}

export default CardBody;
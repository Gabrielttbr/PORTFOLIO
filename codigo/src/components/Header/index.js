import * as S from './styled'

const Header = ({id}) => {
    return(
        <S.Container id={id}>
            <S.ContainerBackground>
                <div>
                    <p>OLÁ, SOU GABRIEL CARLOS CAVALCANTE, DESENVOLVEDOR,</p>
                    <h1> <span>FULL</span>-STACK</h1>
                    <button>
                        SAIBA MAIS
	                    <div class="button__vertical"></div>
                    </button>
                </div>
            </S.ContainerBackground>
        </S.Container>
    )
}
export default Header;
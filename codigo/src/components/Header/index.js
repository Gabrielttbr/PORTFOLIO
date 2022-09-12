import { useEffect } from 'react';
import Aos from 'aos';
import * as S from './styled'

const Header = ({id}) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    },[])
    return(
        <S.Container id={id}>
            <S.ContainerBackground>
                <div  data-aos="fade-right">
                    <p>OLÁ, SOU GABRIEL CARLOS CAVALCANTE, DESENVOLVEDOR,</p>
                    <h1> <span>FULL</span>-STACK</h1>
                    <a href='#About'>
                        <button>
                            SAIBA MAIS
                            <div className="button__vertical"></div>
                        </button>
                    </a>
                </div>
            </S.ContainerBackground>
        </S.Container>
    )
}
export default Header;
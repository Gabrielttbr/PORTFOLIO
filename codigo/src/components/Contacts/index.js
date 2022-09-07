import TitleSection from '../TitleSection';

import Whatzaap from '../../assets/whatzaap-icon-contato.png';
import Instagram from '../../assets/instagram-icon-contato.png';
import Linkedin from '../../assets/LinkedIn-ICON-CONTATO.png';
import Github from '../../assets/GITHUB-ICONE-CONTATO.png';

import * as S from './styled';

const Contacts = () => {
    const contatcs = [
        {title: "Instagram", image: Instagram},
        {title: "WHATSAAP", image: Whatzaap},
        {title: "LINKEDIN", image: Linkedin},
        {title: "GITHUB", image: Github}
    ]
    function getAllContacts (dace) {
        return dace.map( (item, index) => (
            <S.ItemIcon key={index}> 
                <img src={item.image} alt={item.title}  id={item.title}></img>
                <h1>{item.title}</h1>
            </S.ItemIcon>

        ))
    }
    return (
        <S.Container>
            <TitleSection titleOrage={"ATOS"} titleWhite={"CONT"}></TitleSection>
            <S.ContainerConstacts>
                <S.ItemPhrase>
                    <h1>VAMOS TRABLHAR JUNTOS!</h1>
                </S.ItemPhrase>
                <S.IconContats>
                    {getAllContacts(contatcs)}
                </S.IconContats>
            </S.ContainerConstacts>
        </S.Container>
    )
};
export default Contacts;
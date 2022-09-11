import TitleSection from '../TitleSection';
import { useEffect} from 'react';
import Aos from 'aos';
import Whatzaap from '../../assets/whatzaap-icon-contato.png';
import Instagram from '../../assets/instagram-icon-contato.png';
import Linkedin from '../../assets/LinkedIn-ICON-CONTATO.png';
import Github from '../../assets/GITHUB-ICONE-CONTATO.png';

import * as S from './styled';

const Contacts = ({id}) => {
    useEffect(()=> {
        Aos.init({
            duration: 1000
        })
    },[])
    const contatcs = [
        {title: "Instagram", image: Instagram, link: "https://www.instagram.com/garafa02/"},
        {title: "WHATSAAP", image: Whatzaap, link: "http://web.whatsapp.com/send?phone=5511969386808"},
        {title: "LINKEDIN", image: Linkedin, link: "https://www.linkedin.com/in/cavalcantecarlosgabriel/"},
        {title: "GITHUB", image: Github, link: "https://github.com/Gabrielttbr" }
    ]
    function getAllContacts (dace) {
        return dace.map( (item, index) => (
        <S.Link href={item.link} key={index} target="_blank">
            <S.ItemIcon > 
                <img src={item.image} alt={item.title}  id={item.title}></img>
                <h1>{item.title}</h1>
            </S.ItemIcon>
        </S.Link>

        ))
    }
    return (
        <S.Container id={id}>
            <TitleSection titleOrage={"ATOS"} titleWhite={"CONT"}></TitleSection>
            <S.ContainerConstacts data-aos="fade-right">
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
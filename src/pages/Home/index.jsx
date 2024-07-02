import {
    BannerContainer,
    BannerSection,
    ShadowBox,
    SutitleCategory,
    Texto,
    TitleCategory,
    WrapperText
} from "./styles";

export default function Home() {
    return (
        <>
            <BannerSection className="section banner">
                <ShadowBox className="shadow-box"></ShadowBox>
                <BannerContainer className="container">
                    <WrapperText className="wrapper">
                        <TitleCategory className="title-category">Oxi Ivan</TitleCategory>
                        <SutitleCategory className="subtitle-category">Aprenda UX & Front-End</SutitleCategory>
                        <Texto className="texto">
                            Aqui eu mostro tudo que aprendo a partir da minha própria jornada de designer e desenvolvedor, pra que você possa aprender junto comigo sem precisar passar por tudo do zero como eu passei.
                        </Texto>
                        <Texto className="texto">
                            Você pode, SIM, mudar a sua realidade e viver a vida que você quer viver, trabalhando com o que você ama e fazendo disso a sua carreira - desde que você tenha comprometimento! 💙
                        </Texto>
                    </WrapperText>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rRWPHidpntc?si=7XZ6lSuJ_i7HG2rm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </BannerContainer>
            </BannerSection>
        </>
    );
}
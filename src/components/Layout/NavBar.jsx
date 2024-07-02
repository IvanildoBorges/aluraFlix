import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BotaoCTA } from "../BotaoCTA";

const Container = styled.nav`
    &.navbar {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        &.navbar {
            display: flex;
        }
    }
`;

const Ul = styled.ul`
    &.lista-de-links {
        display: flex;
        align-items: center;
        gap: 1.563rem;
    }
`;

const Li = styled.li`
    &.item {
        //
    }
`;

export default function NavBar() {
    const rotas = ["Home", "Novo Video"];
    const [linkAtivo, setLinkAtivo] = useState(0);
    const navigate = useNavigate();

    const getLinhas = () => {
        return rotas.map((rota, index) => {
                return (
                    <Li className="item" key={index}>
                        { linkAtivo === index
                            ? <BotaoCTA 
                                classe="ativo"
                                funcao={() => verificaBotao(rota, index)}
                                child={rota}
                              />
                            : <BotaoCTA 
                                funcao={() => verificaBotao(rota, index)}
                                child={rota}
                              />
                        }
                    </Li>
                );
            });
    }

    const verificaBotao = (rota, indice) => {
        setLinkAtivo(indice);
        
        let rotaVerificada = rota.toLowerCase().split(" ").join("-");
        navigate(`/${rotaVerificada === "home" ? "" : rotaVerificada}`);
    }

    return (
        <Container className="navbar">
            <Ul className="lista-de-links">{ getLinhas() }</Ul>
        </Container>
    );
}
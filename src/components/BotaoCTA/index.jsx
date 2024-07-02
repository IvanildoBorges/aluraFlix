import styled from "styled-components";

const Botao = styled.button`
    &.cta {
        border-radius: 10px;
        border: 2px solid var(--cor-secundaria);
        color: var(--cor-secundaria);
        min-width: 180px;
        height: 54px;
        font-size: 1.25rem;
        font-weight: 900;
        line-height: 1.5;
        text-align: center;
        font-family: inherit;
        background-color: transparent;
        cursor: pointer;
        transition: all .3s ease-in-out;
        will-change: filter;
    }

    &.ativo {
        color: var(--cor-primaria);
        background-color: var(--cor-preta);
        border-color: var(--cor-primaria);
    }

    &.cta:hover {
        color: var(--cor-primaria);
        background-color: var(--cor-preta);
        border-color: var(--cor-primaria);
        filter: drop-shadow(0 0 2em #61dafbaa);
    }

    //TABLET
    @media screen and (min-width: 768px) {
        &.cta {
            //
        }
    }

    //DESKTOP
    @media screen and (min-width: 1440px) {
        &.cta {
            //
        }
    }
`;

export const BotaoCTA = ({...props}) => {
    const { classe, funcao, child } = props;

    return (
        <Botao 
            className={`cta ${classe ? classe : ""}`} 
            onClick={funcao}
        >{child}</Botao>
    );
}
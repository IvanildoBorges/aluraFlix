import { useState } from "react";
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
    }

    &.cta:hover {
        color: var(--cor-primaria);
        border-color: var(--cor-primaria);
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

export const BotaoCTA = () => {
    const [count, setCount] = useState(0);

    function contador() {
        setCount((count) => count + 1);
    }

    return <Botao className="cta" onClick={contador}>Contador em {count}</Botao>
}
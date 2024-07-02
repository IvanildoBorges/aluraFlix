import { Link } from "react-router-dom";
import styled from "styled-components";
import logoAluraFLIX from '../../assets/logo.png';
import NavBar from "./NavBar";

const HeaderContainer = styled.header`
    &.header {
        background-color: var(--cor-bg-dark);
    }

    &.header {} .container {
        margin: 35px 51px;
        justify-content: space-between;
    }

    &.header {} .container .logo {
        height: 2.5rem;
        width: 10.5rem;
        will-change: filter;
        transition: filter 300ms;
    }

    &.header {} .container .logo:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }
`;

export const Header = () => {
    return (
        <HeaderContainer className='section header'>
            <div className="container">
                <Link to="/" className="logo" title='AluraFLIX'>
                    <img src={logoAluraFLIX} alt="Logo AluraFLIX" />
                </Link>
                <NavBar />
            </div>
        </HeaderContainer>
    );
}
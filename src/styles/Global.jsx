import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* ------------- RESET ------------- */
    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
    }

    html, body {
        overflow-x: hidden;
    }

    html {
        font-size: 1rem;
        scroll-behavior: smooth;
    }

    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* ------------- PROJECT VARIABLES ------------- */
    :root {
        /* fontes */
        --fonte-family: "Roboto", sans-serif;
        --fonte-h1: 3.75rem;
        --fonte-h2: 3rem;
        --fonte-h3: 2.875rem;
        --fonte-texto-maior: 1.25rem;
        --fonte-texto: 1.125rem;

        /* cores */
        --cor-primaria: #2271D1;
        --cor-secundaria: #F5F5F5;
        --cor-terciaria: rgba(34, 113, 209, 0.239);
        --cor-bg-dark: #262626;
        --cor-bg-light: #F5F5F5;
        --cor-preta: rgba(0, 0, 0, .9);
        --cor-branca: #FFFFFF;
        --cor-link: #535bf2;
    }

    /* ------------- PROJECT SETTINGS ------------- */
    body {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;
        
        color-scheme: light dark;
        color: var(--cor-bg-light);
        background-color: var(--cor-bg-dark);
        
        font-family: var(--fonte-family);
        font-size: var(--fonte-texto);
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        *::selection {
            background: var(--cor-terciaria);
        }
    }

    @media (prefers-color-scheme: dark) {
        body {
            color: var(--cor-bg-dark);
            background-color: var(--cor-branca);
        }
    }

    /* ------------- REUSABLE COMPONENTS ------------- */
    /* ===== SECTION ===== */


    /* ===== Container ===== */


    /* ===== Logo ===== */
    .logo {
        height: 2.5rem;
        width: 10.5rem;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }
`;

export default GlobalStyle;
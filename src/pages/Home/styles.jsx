import styled from "styled-components";
import player from "../../assets/oxi-ivan.png";

export const BannerSection = styled.section`
    &.banner {
        position: relative;
        height: 90dvh;
        background-image: url(${player});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom;
        background-attachment: fixed;
        align-items: flex-end;
        padding-bottom: 4rem;
    }
`;

export const ShadowBox = styled.div`
    &.shadow-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.8);
    }
`;

export const BannerContainer = styled.div`
    &.container {
        height: fit-content;
        z-index: 1;
        gap: 50px;
    }

    &.container iframe {
        width: 50%;
        height: 30rem;
        border-radius: 16px;
        border: 4px solid var(--cor-primaria);
    }
`;

export const WrapperText = styled.div`
    &.wrapper {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 10px;
    }
`;

export const TitleCategory = styled.h2`
    &.title-category {
        display: flex;
        align-items: center;
        width: fit-content;
        height: fit-content;
        background-color: #6514cc;
        border-radius: 15px;
        height: 80px;
        text-align: center;
        padding: 0rem 1.5rem;
        font-size: var(--fonte-h2);
        margin-bottom: 24px;
        font-weight: 800;
    }
`;

export const SutitleCategory = styled.h3`
    font-size: var(--fonte-h3);
    margin-bottom: 4px;
    font-weight: 400;
`;

export const Texto = styled.p`
    font-size: var(--fonte-texto);
`;
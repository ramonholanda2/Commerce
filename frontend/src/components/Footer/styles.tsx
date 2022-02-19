import styled from "styled-components";

export const FooterContainer = styled.footer `
    display: flex;
    align-items: center; 
    justify-content: center;
    background-color: #1d1d1d; 
    position: absolute;
    bottom: 0;
    width:100%;
    height: 3rem; 
`;

export const CreatedBy = styled.h5 `
    color: #fff;
    font-size: 1.1rem; 
    padding: 10px 0rem;
`;

export const TextSublined = styled.a `
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
`;
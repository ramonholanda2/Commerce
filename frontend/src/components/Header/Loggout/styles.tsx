import styled from "styled-components";

export const LoggoutContainer = styled.div`
    position: absolute;
    top: 5.5rem;
    height: 4rem;
    width: 6rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #3d3b3b;
    background-color: #fff;
    z-index: 1; 
`;

export const LoggoutLink = styled.a `
    color: #c00202;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
`;
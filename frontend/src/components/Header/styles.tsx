import styled from "styled-components";

export const HeaderContainer = styled.header `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .6rem 1rem;
    background-color: #991a91;
`;

export const MenuContainer = styled.ul `
    list-style: none;
    display: flex;
    padding: 2px;
    gap: 2rem;
    padding: 20px;
`;

export const MenuOptions = styled.a `
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;

    :hover {
        cursor: pointer;   
    }
`;

export const LogoSvg =  styled.img `
    background-color: #fff;
    border-radius: 100%;
    position: absolute;
    left: 10px;
    height: 70px;
    max-height: 70px;
`; 

import styled from "styled-components";
import bgImage from "../../assets/bg-login.jpg";

export const CreateAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  min-height: 100vh;
  max-width: 100vw;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CreateAccountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border-radius: 20px;

  height: 38rem;

  max-height: 40rem;

  width: 30rem;
  max-width: 30rem;

  background-color: #fff;
`;

export const Title = styled.h1`
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 500;
  padding: 15px 0px;

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const FormLogin = styled.form`
  height: 100%;
  
  `;

export const LoginFieldsContainer = styled.div`
  height: 100%;
  max-width: 27rem;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: 500px) {
    max-width: 22rem;
  }

  @media screen and (max-width: 400px) {
    max-width: 18rem;
  }

  @media screen and (max-height: 560px) {
    gap: 1rem;
  }
`;

export const InputField = styled.input`
  border: 1px solid #e4e4e4;
  border-bottom: 3px solid purple;
  border-radius: 5px;
  padding: 9px;
  font-size: 1.1rem;
  width: 100%;

  :focus {
    background-color: #fffc;
  }

  @media screen and (max-width: 500px) {
    max-width: 20rem;
    width: 100%;
    font-size: medium;
  }

  @media screen and (max-width: 400px) {
    max-width: 16rem;
  }
`;

export const LabelTitle = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;

  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;

export const Div = styled.div``;
export const Link = styled.a`
    text-decoration: none;
    padding: 8px;
    width: 100%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all .3s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    text-decoration: none;

    :hover {
        filter: brightness(.9);
        transition: all .3s ease-in;
    } 

    ::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    width: 0;
    left: 0;
    background-color: black;
    transition: width 0.3s ease-in-out;
  }

  ::after {
      position: absolute;
      bottom: -1.5px;
  }

  :hover::after {
    width: 30%;

  }
`;

export const ButtonCreateOrBack = styled.button `
    padding: 8px;
    width: 100%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all .3s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    text-decoration: none;

    :hover {
        filter: brightness(.9);
        transition: all .3s ease-in;
    } 

    ::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    width: 0;
    left: 0;
    background-color: black;
    transition: width 0.3s ease-in-out;
  }

  ::after {
      position: absolute;
      bottom: -1.5px;
  }

  :hover::after {
    width: 30%;

  }
`;


export const ErrorMessage = styled.span `
font-family: 'Poppins', sans-serif;
  border-radius: 7px;
  padding: 1px;
  text-align: center;
  background-color: #f12323;
  color: white;
  width: 100%;
  font-size: 1rem;

  margin: .5px;

  :nth-child(3) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
       max-width: 20rem;
       font-size: .95rem;
    }
    
    @media screen and (max-width: 400px) {
        max-width: 17rem;
        font-size: .9rem;
  }

`
import styled from "styled-components";
import bgImage from "../../assets/bg-login.jpg";

export const LoginContainer = styled.div`
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

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;

  border-radius: 20px;
  height: 50rem;
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
  flex: 1;
  display: flex;
  `;

export const LoginFieldsContainer = styled.div`
  flex: 1;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InputField = styled.input`
  width: 21rem;
  max-width: 21rem;
  outline: none;

  border: 1px solid #e4e4e4;
  border-bottom: 3px solid purple;
  border-radius: 5px;
  padding: 10px;

  font-size: 1.1rem;

  :focus {
    background-color: #fffc;
  }

  @media screen and (max-width: 400px) {
    max-width: 14rem;
    font-size: medium;
  }
`;

export const LinkNewAccount = styled.a`
  color: purple;
  text-align: right;
  margin-top: 1rem;
  margin-bottom: 3rem;

  text-decoration: none;
  font-size: 1.07rem;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-height: 550px) {
    margin-bottom: 1rem;
  }
`;

export const LabelTitle = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 16.7rem;

  @media screen and (max-width: 400px) {
    margin-right: 10rem;
    font-size: large;
  }
`;

export const LoginButton = styled.button`
  position: relative;
  font-family: "Nunito Sans", sans-serif;
  padding: 10px 5px;
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;
  width: 16rem;
  background-color: white;
  border-radius: 5px;
  border: none;
  background-color: #c2c1c14e;
  transition: all 0.3s ease-in;

  :hover {
    background-color: #8b8bac4e;
    transition: all 0.3s ease-in;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    width: 0;
    left: 0;
    background-color: purple;
    transition: width 0.3s ease-in-out;
  }

  ::after {
    position: absolute;
    bottom: -1.5px;
  }

  :hover::after {
    width: 50%;

    background-color: rgb(50, 159, 255);
  }
`;

export const OtherLogin = styled.div`
  cursor: pointer;
  :last-child {
    margin-left: 2rem;
  }
`;
export const ErrorMessage = styled.span`
  font-family: "Poppins", sans-serif;
  border-radius: 7px;
  padding: 3px;
  text-align: center;
  background-color: #f12323;
  color: white;
  width: 100%;
  font-size: 1rem;

  margin: 1px;
`;

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import {
  LoginFieldsContainer,
  CreateAccountBox,
  FormLogin,
  CreateAccountContainer,
  InputField,
  Title,
  LabelTitle,
  Div,
  ButtonCreateOrBack,
  Link,
  ErrorMessage,
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";

type FormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { push } = useHistory();

  const { createAccountWithEmailAndPassword, error } = useAuthContext();

  async function onSubmit(loginData: FormValues) {
    await createAccountWithEmailAndPassword(
      loginData.email,
      loginData.password,
      loginData.name,
      loginData.surname
    );
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      push("/");
    }
  }, [push]);

  return (
    <CreateAccountContainer>
      <CreateAccountBox>
        <Title>Criar Conta</Title>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <LoginFieldsContainer>
            <Div
              style={{
                display: "flex",
                padding: "1rem .8rem",
              }}
            >
              <LabelTitle style={{ marginRight: "1rem" }}>
                Nome
                <InputField
                  {...register("name", { required: true, minLength: 2 })}
                  required
                  type={"text"}
                />
              </LabelTitle>
              <LabelTitle>
                Sobrenome
                <InputField
                  {...register("surname", { required: true, minLength: 2 })}
                  required
                  type={"text"}
                />
              </LabelTitle>
            </Div>

            <Div style={{ display: "flex", flexDirection: "column" }}>
              <LabelTitle>Email</LabelTitle>
              <InputField
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email não está correto",
                  },
                })}
                required
                type={"text"}
                style={{ width: "25rem" }}
              />
            </Div>

            <Div style={{ display: "flex", flexDirection: "column" }}>
              <LabelTitle>Senha</LabelTitle>
              <InputField
                required
                type={"password"}
                style={{ width: "25rem" }}
                {...register("password", { required: true, minLength: 8 })}
              />
            </Div>

            <Div
              style={{ display: "flex", width: "100%", padding: "0rem 1rem" }}
            >
              <Link href="/login" style={{ backgroundColor: "#8c258d" }}>
                <IoIosArrowBack />
                Voltar
              </Link>
              <ButtonCreateOrBack
                type="submit"
                style={{ marginLeft: "15px", backgroundColor: "#1E90FF" }}
              >
                Salvar
              </ButtonCreateOrBack>
            </Div>
          </LoginFieldsContainer>
        </FormLogin>
        {error === "auth/email-already-in-use" && (
          <ErrorMessage>Este email já está em uso</ErrorMessage>
        )}
        {errors.email && <ErrorMessage>Email inválido</ErrorMessage>}
        {(errors.name || errors.surname) && (
          <ErrorMessage>Nome e Sobrenome obrigatórios</ErrorMessage>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <ErrorMessage>Senha precisa ter pelo menos 8 letras</ErrorMessage>
        )}
      </CreateAccountBox>
    </CreateAccountContainer>
  );
};

export default CreateAccount;

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import {
  LoginContainer,
  LoginBox,
  Title,
  LoginFieldsContainer,
  InputField,
  LabelTitle,
  LoginButton,
  FormLogin,
  ErrorMessage,
  OtherLogin,
  LinkNewAccount,
} from "./styles";

type FormValues = {
  email: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const {
    user,
    error,
    signInWithGoogle,
    signInWithFacebook,
    loginWithEmailAndPassword,
  } = useAuthContext();
  const history = useHistory();

  async function onSubmit(loginData: LoginData) {
    await loginWithEmailAndPassword(loginData.email, loginData.password);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  }, [history, user]);

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <LoginFieldsContainer>
            <LabelTitle>Email</LabelTitle>
            <InputField
              required
              type={"text"}
              style={{ marginBottom: "2.8rem" }}
              className="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email não está correto",
                },
              })}
            />
            <LabelTitle>Senha</LabelTitle>

            <InputField
              required
              type={"password"}
              className="password"
              {...register("password", { required: true, minLength: 8 })}
            />

            <LinkNewAccount to="/criar-conta">Criar uma conta</LinkNewAccount>

            <LoginButton type="submit">Entrar</LoginButton>
            <div style={{ display: "flex", marginTop: "1.5rem" }}>
              <OtherLogin>
                <BsFacebook
                  onClick={signInWithFacebook}
                  size="1.8rem"
                  color="blue"
                />
              </OtherLogin>
              <OtherLogin>
                <FcGoogle onClick={signInWithGoogle} size="1.8rem" />
              </OtherLogin>
            </div>
          </LoginFieldsContainer>
        </FormLogin>
        {errors.email && <ErrorMessage>Email inválido</ErrorMessage>}
        {error === "auth/user-not-found" && (
          <ErrorMessage>Email inexistente!</ErrorMessage>
        )}
        {error === "auth/wrong-password" && (
          <ErrorMessage>Senha Inválida!</ErrorMessage>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <ErrorMessage>Senha precisa ter pelo menos 8 letras</ErrorMessage>
        )}
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

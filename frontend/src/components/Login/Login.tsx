import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
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
  LinkNewAccount
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


  function onSubmit(loginData: LoginData) {
    console.log(loginData);
  }

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
              style={{  }}
              className="password"
              {...register("password", { required: true, minLength: 8 })}
            />

            <LinkNewAccount href="/create-account">Criar uma conta</LinkNewAccount>

            <LoginButton type="submit">Entrar</LoginButton>
            <div style={{display: "flex", marginTop: "1.5rem"}}>
              <OtherLogin>
                  <BsFacebook size="1.8rem" color="blue" />
              </OtherLogin>
              <OtherLogin>
                  <FcGoogle size="1.8rem" />
              </OtherLogin>
            </div>
          </LoginFieldsContainer>
        </FormLogin>
        {errors.email && <ErrorMessage>Email inválido</ErrorMessage>}
        {errors.password && errors.password.type === "minLength" && (
          <ErrorMessage>Senha precisa ter 8 letras</ErrorMessage>
        )}
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

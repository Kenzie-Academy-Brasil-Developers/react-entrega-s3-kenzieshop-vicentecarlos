import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const Login = () => {
    const {push} = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().required("Campo requerido").email("Email errado"),
        password: yup.string().required("Campo requerido")
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(formSchema)
    })

    const submitForm = data => {
        push("/")
        console.log(data)
    }
  
    return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <fieldset>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu melhor email" {...register("email")}/>
      </fieldset>
      <fieldset>
        <label>Senha:</label>
        <input type="password" {...register("password")}/>
      </fieldset>
      <button type="submit">Logar</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15rem auto;
    background-color: #808080;
    width: 15%;
    color: white;

    fieldset {
        border: none;
        margin: 1rem 0;
    }
`

export { Login };

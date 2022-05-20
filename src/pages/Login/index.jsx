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
        <input placeholder="Digite seu melhor email" {...register("email")}/>
      </fieldset>
      <fieldset>
        <label>Senha:</label>
        <input type="password" {...register("password")}/>
      </fieldset>
    </StyledForm>
  );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

export { Login };

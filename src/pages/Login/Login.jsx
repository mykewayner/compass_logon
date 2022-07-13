import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserIcon from '../../assets/Vector.png'
import PasswordIcon from '../../assets/icon-password.png'

import Logo from "../../assets/Logo-Compasso-Branco-hor1.png"
import { ContainerRight, ContainerLeft, PageWrapper, Icon, InputWrapper,LoginTitle, LoginForm, Intro, Button, Img, Title, IntroText } from './styles'
import Input from '../../components/Input/Input'

function Login() {
const [user, setUser] = React.useState('');
const [password, setPassword] = React.useState('');
const navigate = useNavigate();
let error = false; 

function handleClick(event) {
  event.preventDefault();
  
  if(user === "admin" && password === "admin") {
    navigate("/home");
} else {
    error = false;
}
}



    
  return (
    <PageWrapper>
      <ContainerLeft>
        <Intro>
          <Title>Olá,</Title>
          <IntroText>Para continuar navegando de forma segura, efetue o login na rede</IntroText>
        </Intro>      
      
        <LoginForm>
          <LoginTitle>Login</LoginTitle>
          <InputWrapper>
            
            <Input type="text" placeholder="Usuário" value={user} setValue={setUser} />
            <Icon draggable="false" src={UserIcon} alt="ícone de Usuário" />              
          </InputWrapper>
          <InputWrapper>
            
            <Input type="password" placeholder="Senha" value={password} setValue={setPassword} />
            <Icon draggable="false" src={PasswordIcon} className="login-icon" alt="ícone de Senha" />              
          </InputWrapper>
           {error && <p>Usuário ou senha incorretos</p>}
                      

          <Button onClick={handleClick}>Continuar</Button>
        </LoginForm>
      </ContainerLeft>

      <ContainerRight>      
      <Img alt='logo' src={Logo} />      
      </ContainerRight>
      
    </PageWrapper>
  )
}

export default Login
import React from 'react'
import Logo from "../../assets/Logo-Compasso-Branco-hor1.png"
import { ContainerRight, ContainerLeft, PageWrapper, InputWrapper, LoginForm, Intro, Button, Img } from './styles'
 
function login() {
  return (
    <PageWrapper>
      <ContainerLeft>      
      
        <LoginForm>
                  <Intro>
                    <h1>Olá</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede</p>
                  </Intro>
                      <InputWrapper>
                          <input type="text" placeholder="Usuário" />
                          
                      </InputWrapper>
                      <InputWrapper>
                          <input  type="password" placeholder="Senha" />
                          
                      </InputWrapper>
                      

                      <Button>Enviar</Button>
        </LoginForm>
      </ContainerLeft>

      <ContainerRight>      
      <Img alt='logo' src={Logo} />      
      </ContainerRight>
      
    </PageWrapper>
  )
}

export default login
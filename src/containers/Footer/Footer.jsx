import React from 'react'
import { FooterContainer, FooterTextContainer ,ButtonContainer, TextContent, Button, ButtonContinuar,ContinuarText, FooterBar } from './styles'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  function handleClickLogout(){
    navigate('/')
  }

  return (
    <FooterContainer>                
      <FooterTextContainer>
          <TextContent>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixa-a aberta em segundo plano e abra uma nova janela para continuar a navegar</TextContent>
      </FooterTextContainer>

        <FooterBar></FooterBar>

        <textContent  id="footer-refresh-txt" text="Aplication refresh in" />

        <timer >aaa</timer>

        <ContinuarText>
            <ButtonContinuar >continuar navegando</ButtonContinuar>
        </ContinuarText>

        <ButtonContainer>
          <Button onClick={handleClickLogout}>Logout</Button>
        </ButtonContainer>
    </FooterContainer>
  
  )
}

export default Footer
import React from 'react'
import { FooterContainer, FooterTextContainer ,ButtonContainer, TextContent, Countdown,RefreshTxt,Seconds ,Button, ButtonContinuar,ContinuarText, FooterBar, Timer } from './styles'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  const [timer, setTimer] = React.useState(600)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer - 1)
        if(timer === 0){
          navigate('/')
        }
    }, 1000)
    return () => clearInterval(interval)
  }
  , [timer, navigate])


  function handleClickLogout(){
    navigate('/')
  }

  function handleClickContinuar(){
    setTimer(600)
  }

  return (
    <FooterContainer>                
      <FooterTextContainer>
          <TextContent>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixa-a aberta em segundo plano e abra uma nova janela para continuar a navegar</TextContent>
      </FooterTextContainer>

        <FooterBar></FooterBar>

        <textContent  id="footer-refresh-txt" text="Aplication refresh in" />

        <Timer >
        <RefreshTxt>Application<br/>refresh in</RefreshTxt>
            <span>
                <Countdown>{timer}</Countdown>
                <Seconds>seconds</Seconds>
            </span>
        </Timer>

        <ContinuarText>
            <ButtonContinuar onClick={handleClickContinuar} >continuar navegando</ButtonContinuar>
        </ContinuarText>

        <ButtonContainer>
          <Button onClick={handleClickLogout}>Logout</Button>
        </ButtonContainer>
    </FooterContainer>
  
  )
}

export default Footer
import React from 'react'
import { MainContent,Title, FirstTitle, TextContent, Logo, TextWrapper, TextBox  } from './styles'
import LogoBola from '../../assets/uol-ball-transparent1.png'

function Main() {
  return (
    <MainContent>
        <Logo draggable="false" src={LogoBola} />
        <TextWrapper>
            
            <TextBox>
                <FirstTitle >Our mission is </FirstTitle>
                <TextContent >Nossa missão é </TextContent>
            </TextBox>
            
            <TextBox>          
                <Title> to transform the world </Title>
                <TextContent>transformar o mundo </TextContent>
            </TextBox>
            
            <TextBox>         
                <Title> building digital experiences </Title>
                <TextContent> construindo experiências digitais </TextContent>
            </TextBox>
            
            <TextBox>              
                <Title> that enable our client's growth </Title>
                <TextContent> que permitam o crecimento dos nossos clientes</TextContent>
            </TextBox>
        </TextWrapper>
    </MainContent>
  )
}

export default Main
import React from 'react'
import ImgLogo from '../../assets/compassuol-logo-black.png'
import { Logo, HeaderWrapper } from './styles'
import Clock from '../../components/Clock/Clock'

function Header() {
  return (
    <HeaderWrapper> 
        <Logo src={ImgLogo} />
        <Clock />
        <weather>10*C</weather>
        
        </HeaderWrapper>
  )
}

export default Header
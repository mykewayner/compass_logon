import React from 'react'
import ImgLogo from '../../assets/compassuol-logo-black.png'
import { Logo, HeaderWrapper } from './styles'

function Header() {
  return (
    <HeaderWrapper> 
        <Logo src={ImgLogo} />
        <clock>00:00</clock>
        <weather>10*C</weather>
        
        </HeaderWrapper>
  )
}

export default Header
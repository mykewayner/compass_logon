import React from 'react'
import ImgLogo from '../../assets/compassuol-logo-black.png'
import { Logo, HeaderWrapper } from './styles'
import Clock from '../../components/Clock/Clock'
import Weather from '../../components/Weather/Weather'


function Header() {
  return (
    <HeaderWrapper> 
        <Logo src={ImgLogo} />
        <Clock />
        <Weather />
        
        </HeaderWrapper>
  )
}

export default Header
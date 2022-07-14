import styled from "styled-components";

export const WeatherContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
    color: black;
    margin-top: 15px;
    margin-right: 15px;
    @media(max-width: 650px){
        display: none;
    }
  
@media(max-width: 800px){
    display: none;
}
`

export const WeatherTemp = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 35px;
    color: black;
img{
    height: 55px;
}
h2{
    margin: 0;
}

`

export const WeatherText = styled.p`
display: flex;
font-size: 12px;
margin: 0;
`

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

    }
  
@media(max-width: 800px){

}
`

export const WeatherTemp = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 26px;
    color: black;
    @media(max-width: 850px){
    font-size: 20px;
}
img{
    height: 35px;
    @media(max-width: 850px){
    height: 30px;
}
}
h2{
    margin: 0;
}

`

export const WeatherText = styled.p`
display: flex;
font-size: 12px;
margin: 0;
@media(max-width: 850px){
    font-size: 10px;
}
`

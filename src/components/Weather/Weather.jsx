import React from 'react'
import useFetch from '../../utils/useFetch'
import { WeatherContainer, WeatherTemp, WeatherText } from './styles'

function Weather() {
    const {loading, error, request, data} = useFetch();

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            
            request(`http://api.weatherapi.com/v1/current.json?key=f4fe6eec16764bdd99120302220203&q=${lat},${lng}&aqi=no`);
        })
    }, [request])


  
  
    return (
        <WeatherContainer>
            {error  && <WeatherText>{error}</WeatherText>}
            {loading && <WeatherText>Carregando...</WeatherText>}
            {data && <WeatherText>{data.location.name} - {data.location.region}</WeatherText>}
            <WeatherTemp>
                <img src={data && data.current.condition.icon} alt=""/>
                {data && <h2>{data.current.temp_c}°</h2>}
            </WeatherTemp>
        </WeatherContainer>
  )
}

export default Weather
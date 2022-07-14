import React from 'react'
import { ClockContainer, DateContainer, TimeContainer  } from './styles'

function Clock() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    const [date, setDate] = React.useState(new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }))
    
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
            setDate(new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }))
        }, 1000)
        return () => clearInterval(interval)
    }
    , [])


  return (
    <ClockContainer>
        <TimeContainer>{time}</TimeContainer>
        <DateContainer>{date}</DateContainer>
    </ClockContainer>
  )
}

export default Clock
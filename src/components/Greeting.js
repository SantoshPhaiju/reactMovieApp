import React, { useEffect, useState } from 'react'

const Greeting = () => {
    const [greeting, setGreeting] = useState("");
    const [color, setColor] = useState("");
    const h1Style = {
        fontSize: '30px',
        color: 'blue',
        textAlign: 'center',
        margin: '20px'
    }

    const spanStyle = {
        fontSize: '34px',
        color: color
    }

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        console.log(hour);
        if(hour < 12){
            setGreeting("Good Morning");
            setColor("green")
        }else if(hour >= 12 && hour < 20){
            setGreeting("Good Afternoon");
            setColor('purple');
        }else if(hour >=20 && hour < 24){
            setGreeting("Good Night");
            setColor('black')
        }
    }, []);
  return (
    <>
      <h1 style={h1Style}>Welcome sir, <span style={spanStyle}>{greeting}</span></h1>
    </>
  )
}

export default Greeting

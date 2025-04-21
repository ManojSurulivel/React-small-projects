import React, { useState } from 'react'

const api = {
            key: "d22b764cbb45bf27a7486a3497c757a2",
            base: "https://api.openweathermap.org/data/2.5/",
        };  

    

const WeatherAPI = () => {
   const[search,setSearch] = useState("");
   const[weather,setWeather] = useState({})

   const searchPressed =()=>{
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then((result) => {
         setWeather(result)
         })
        }

  return (
        <div className="app">
            <header className="app-header">
              <div>
                  <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
                  <button onClick={searchPressed()}>API</button>
              </div>
               
                {typeof weather.main != "undefined" ? (

              <div>
                    <p>{weather.name}</p>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].main}</p>
                    <p>({weather.weather[0].description})</p>
              </div>

              ) : ("") }

            </header>
        </div>
             
              )
    }

     export default WeatherAPI

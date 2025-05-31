import SearchBox from './SearchBox'
import { useState } from 'react';
import Info from './infobox'
import "./WeatherApp.css"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Mumbai",
        description: "clear sky",
        feels_like:25.56, 
        humidity:56, 
        pressure: 1013,
        temperature:25.49, 
        temp_max:25.49, 
        temp_min:25.49,
        weather:"haze"
    });
    let newInfo=( info )=>{
        console.log("infooo",info);
        setWeatherInfo(info);
    };
    return(
        <div className='weather-cointainer'>
           <SearchBox setinfo={ newInfo }/>
           <Info weatherdata={ weatherInfo }/>
        </div>
    );
}
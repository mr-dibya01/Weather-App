import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=27ab36b8dfe3375c51e5a2512aa0e8bf&units=metric

export default function SearchBox({ setinfo }){
    const API_URL ="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "27ab36b8dfe3375c51e5a2512aa0e8bf";

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    
    function handleInputChange(event){
        setCity(event.target.value);
    }
    async function getWeatherInfo(){
        try{
            let  response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse= await response.json();
            console.log(jsonresponse);
            let result={
                city       : city,
                temperature: jsonresponse.main.temp,
                feels_like : jsonresponse.main.feels_like,
                pressure   : jsonresponse.main.pressure,
                humidity   : jsonresponse.main.humidity,
                temp_max   : jsonresponse.main.temp_max,
                temp_min   : jsonresponse.main.temp_min,
                description: jsonresponse.weather[0].description
            }
           return result;
        }catch(err){
            throw err;
        }
    }
    async function handelSubmit( event ){
    try{
        event.preventDefault();
        setCity("");
        let result=await getWeatherInfo();
        setinfo(result);
    }catch(err){
        setError(true);
    }
    }
    return(
        <div className='searchbar'>
            <form onSubmit={ handelSubmit }>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined"  
                    value={city}
                    required
                    onChange={handleInputChange}
                />
                <br /><br />  
                <Button variant="contained" type='submit'>
                Search
                </Button>
                <br /><br />
            </form>
            {error && <p style={{color:"red"}}>No such place exist!</p>}
        </div>
    );
}
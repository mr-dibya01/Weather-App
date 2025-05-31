import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infobox.css"

let info={
    city:"Mumbai",
    description: "clear sky",
    feels_like:25.56, 
    humidity:56, 
    pressure: 1013,
    temp:25.49, 
    temp_max:25.49, 
    temp_min:25.49,
    weather:"haze"
}

let HOT_WEATHER="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
let COLD_WEATHER="https://plus.unsplash.com/premium_photo-1675715923852-ec99a48deffa?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let RAIN_WEATHER="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Info({ weatherdata }){
    return(
      <div className='infobox'>
        <div className='info'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={ 
                        weatherdata.humidity > 80 
                        ? RAIN_WEATHER 
                        : weatherdata.temperature > 15 
                        ? HOT_WEATHER 
                        : COLD_WEATHER
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <p>{weatherdata.city}{ 
                        weatherdata.humidity > 80 
                        ? <ThunderstormIcon />
                        : weatherdata.temperature > 15 
                        ? <WbSunnyIcon /> 
                        : <AcUnitIcon />
                    }</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = { weatherdata.temperature }</p>
                        <p>Humidity = { weatherdata.humidity }</p>
                        <p>pressure = { weatherdata.pressure }</p>
                        <p>Max  Temperature = { weatherdata.temp_max }&deg;C</p>
                        <p>Min Temperature = { weatherdata.temp_min }&deg;C</p>
                        <p>The weather can be described as <i>{ weatherdata.description }</i> feels like {info.feels_like}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
    );
}
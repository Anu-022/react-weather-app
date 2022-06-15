import React, {useState, useEffect} from 'react';
import "./Forecast.css";
import axios from 'axios';
import ForecastDay from './ForecastDay';

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(()=> {
        setLoaded(false);
    }, [props.data.coord]);

     function handleForecast(response){
        setForecast(response.data.daily);
        setLoaded(true); 
     }
        
     function load() {
        const apiKey = "a2cad1909b029ab4483669f9e477787b";
        let latitude = props.data.coord.lat;
        let longitude = props.data.coord.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecast);
     }
        if (loaded) {
        
           return (
                <div className= "Forecast pt-2 pb-2">
                    {forecast.map(function(forecast, index){
                        if (index < 5) {
                        return (
                            <div key={index} >
                                <ForecastDay data ={forecast} />
                            </div>
                        );
                      } else {
                          return null;
                      }
                    })}
                    
                </div>
    );
}
else {
         load()  ;
        return null;
 }
}
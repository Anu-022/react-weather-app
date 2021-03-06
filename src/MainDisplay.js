import React,{useState} from "react";
import "./MainDisplay.css";
import axios from "axios";
import FormattedtDate from "./FormattedDate";
import FormatttedTime from "./FormattedTime";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function MainDisplay(props) {
   
    const [city, setCity] = useState(props.defaultCity);
    const [weatherObj, setWeatherObj] = useState({ready: false});
    
    // function to display temperature, humidity and wind values from the openweather api
    function handleResponse(response) {
        console.log(response.data);

        setWeatherObj({
            ready: true,
            city: response.data.name,
            coord: response.data.coord,
            date: new Date(response.data.dt*1000),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            country: response.data.sys.country,
            description: response.data.weather[0].description,
            temperature: Math.round(response.data.main.temp),
            icon: response.data.weather[0].icon,
        });
    }
    // search function
    function search() {
        const apiKey = "a2cad1909b029ab4483669f9e477787b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    //sets city variable to the query typed in by the user.
     function handleSubmit(event) {
      event.preventDefault();
      search();
     }
     
     function changeCity(event) {
         setCity(event.target.value);
         console.log(city)
         
     }
     
         
       
       
        //convert fahreheit to celsius
        //function showCelsius(event) {
          //  event.preventDefault();
           // weather;
        //}
       

      if(weatherObj.ready) {
          return (
              <div className="MainDisplay">
                  <div className="row">
                      <div className= "col-md-7 pt-4">
                           <form>
                               <input type= "search" placeholder="Search a city..." autoFocus= "on" onChange ={changeCity}/>
                               <button type="submit" onClick={handleSubmit}>Search</button>
                           </form>
                           <ul>
                               <li className="city-description">{weatherObj.city}, {weatherObj.country}</li>
                               <li>
                                   <FormatttedTime date={weatherObj.date} />
                               </li>
                               <li>
                                   <FormattedtDate date= {weatherObj.date}/>
                               </li>
                               <li className="weather-description mt-3 text-center">{weatherObj.description}</li>
                           </ul>
                           <div className="weather-icon text-center">
                               <WeatherIcon code={weatherObj.icon} size ={150}/>
                           </div>
                   <ul>
                      <li>Humidity: {weatherObj.humidity}%</li>
                      <li>Wind: {weatherObj.wind} km/hr</li>
                  </ul>
                  <div className="weather-temperature">
                       <WeatherTemperature celsius={weatherObj.temperature} />
                 </div> 
               </div>
               <div className= "col-md-5">
                    <Forecast data = {weatherObj} size={50} />
               </div>
           </div>
           <div className="copyright">Weather App is Designed by AnuSanya and 
            <a href="https://github.com/Anu-022/react-weather-app"> opensourced</a>
            </div>
        </div>
    );
}
  else {
    search();
     return "Loading...";
}
}
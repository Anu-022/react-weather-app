import React,{useState} from "react";
import "./MainDisplay.css";
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';
import Forecast from "./Forecast";

export default function MainDisplay() {
    const [ready, setReady] = useState(false);
    const [city, setCity] = useState(city);
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    
    // function to display temperature, humidity and wind values from the openweather api
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(Math.round(response.data.main.temp));
        setHumidity(response.data.main.humidity);
        setWind(Math.round(response.data.wind.speed));
        setReady(true);
    }
    
     //sets city variable to the query typed in by the user.
     function handleSubmit(event) {
      event.preventDefault();
      setCity(city);
     }
     
     function changeCity(event) {
         event.preventDefault();
         setCity(event.target.value);
     }
     // function to display the current date and year
     function formatDate() {
         let today = new Date();
         let year = today.getFullYear();
         let date = today.getDate();         
         let months =["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
         let month = months[today.getMonth()];
         return `${month} ${date}, ${year}`;
       }

       //code to get the current day
       let today = new Date();
       let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
       let day = days[today.getDay()];

       
         
       // convert celsius to Fahrenheit
        function showFahrenheit(event) {
            event.preventDefault();
            setTemperature(Math.round(((temperature*9) / 5 +32)));
        }
       
        //convert fahreheit to celsius
        function showCelsius(event) {
            event.preventDefault();
            setTemperature(temperature);
        }
       //API calls to the openweather api.
       const apiKey = "a2cad1909b029ab4483669f9e477787b";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

      if(ready) {
          return (
              <div className="MainDisplay" mt-3>
                  <div className="row">
                      <div className= "col-md-7 pt-4">
                           <form>
                               <input type= "search" placeholder="Search a city..." autoFocus= "on" onChange ={changeCity}/>
                               <button type="submit" onClick={handleSubmit}>Search</button>
                           </form>
                           <ul>
                               <li>{day}</li>
                               <li>{formatDate()}</li>
                               <li>{city}</li>
                               <li className="weather-description mt-3 text-center">Mostly Cloudy</li>
                           </ul>
                           <div className="weather-icon text-center">
                           <ReactAnimatedWeather icon= {"CLOUDY"} color={"yellow"} size= {150} animate={false} />
                           </div>
                   <ul>
                      <li>Humidity: {humidity}%</li>
                      <li>Wind: {wind} km/hr</li>
                  </ul>
                  <div>
                       <span className="temp-style">{temperature}</span>
                       <span className="units"><a href="#" onClick = {showCelsius}>°C</a> | <a href="#" onClick={showFahrenheit}>°F</a></span>
                 </div>
                    <p>Lagos, Nigeria</p>  
               </div>
               <div className= "col-md-5">
                    <Forecast />
               </div>
           </div>
        </div>
    )
}
  else {
    const apiKey = "a2cad1909b029ab4483669f9e477787b";
    let city ='Lagos';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
     
     return "Loading...";
}
}
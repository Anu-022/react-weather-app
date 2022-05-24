import React from "react";
import "./MainDisplay.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function MainDisplay (){
    return (
        <div className="MainDisplay" mt-3>
            <ul>
                <li>Saturday</li>
                <li>May 19, 2022</li>
                <li className="weather-description mt-3 text-center">Mostly Cloudy</li>
            </ul>
            <div className="weather-icon text-center">
            <ReactAnimatedWeather icon= {"CLOUDY"} color={"yellow"} size= {150} animate={false} />
            </div>
            <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 3.5 km/hr</li>
            </ul>
            <div>
            <span className="temperature">9</span>
            <span className="units">°C</span>
            </div>
            
            <p>Abuja, Nigeria</p>
            <p className="copyright">Weather App is Designed by AnuSanya & <a href="https://github.com/Anu-022/react-weather-app">opensourced</a></p>   
        </div>
    )
}
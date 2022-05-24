import React from "react";
import "./MainDisplay.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function MainDisplay (){
    return (
        <div className="MainDisplay" mt-3>
            <ul>
                <li>Saturday</li>
                <li>May 19, 2022</li>
                <li className="weather-description mt-3 text-center mt-5">Mostly Cloudy</li>
            </ul>
            <div className="weather-icon text-center">
            <ReactAnimatedWeather icon= {"CLOUDY"} color={"yellow"} size= {150} animate={false} />
            </div>
            <h2>9°C</h2>
            <p>Abuja, Nigeria</p>
            <p className="copyright">Weather App is Designed by AnuSanya & opensourced</p>   
        </div>
    )
}
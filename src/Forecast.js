import React from 'react';
import "./Forecast.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast() {
    return (
        <div className= "Forecast pt-2 pb-2">
            <div className= "forecast-div">
                <div className='forecast-description d-flex justify-content-between mt-2'>
                <h3>Cloudy</h3>
                <ReactAnimatedWeather icon= {"CLOUDY"} color={"yellow"} size={50} animate={false} />
                </div>  
                <div className= "forecast-info d-flex justify-content-between mt-3">
                    <h3>12°C</h3>
                    <p>21.05.2022</p>
                </div>
            </div>
            <div className= "forecast-div">
            <div className='forecast-description d-flex justify-content-between mt-2 '>
                <h3>Rain</h3>
                <ReactAnimatedWeather icon= {"RAIN"} color={"yellow"} size={50} animate={false} />
                </div>  
                <div className= "forecast-info d-flex justify-content-between mt-3">
                    <h3>12°C</h3>
                    <p>21.05.2022</p>
                </div>
            </div>
            <div className= "forecast-div">
            <div className='forecast-description d-flex justify-content-between mt-2'>
                <h3>Sunny</h3>
                <ReactAnimatedWeather icon= {"CLEAR_DAY"} color={"yellow"} size={50} animate={false} />
                </div>  
                <div className= "forecast-info d-flex justify-content-between mt-3">
                    <h3>12°C</h3>
                    <p>21.05.2022</p>
                </div>
            </div>
            <div className= "forecast-div">
            <div className='forecast-description d-flex justify-content-between mt-2'>
                <h3>Cloudy</h3>
                <ReactAnimatedWeather icon= {"PARTLY_CLOUDY_DAY"} color={"yellow"} size={50} animate={false} />
                </div>  
                <div className= "forecast-info d-flex justify-content-between mt-3">
                    <h3>12°C</h3>
                    <p>21.05.2022</p>
                </div>
            </div>
            <div className= "forecast-div">
            <div className='forecast-description d-flex justify-content-between mt-2'>
                <h3>Partly Cloudy</h3>
                <ReactAnimatedWeather icon= {"PARTLY_CLOUDY_DAY"} color={"yellow"} size={50} animate={false} />
                </div>  
                <div className= "forecast-info d-flex justify-content-between mt-3 mb-0">
                    <h3>12°C</h3>
                    <p>21.05.2022</p>
                </div>
            </div> 
        </div>
    )
}
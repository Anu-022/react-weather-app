import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import './ForecastDay.css';

export default function ForecastDay(props) {
     
    return (
        <div className="ForecastDay">
            <div className= "forecastDay-div">
                <div className='forecast-description d-flex justify-content-between mt-2'>
                    <h3>{props.data.weather[0].description}</h3>
                    <WeatherIcon code= {props.data.weather[0].icon} />
                </div>  
                <div className= "forecast-info d-flex justify-content-between mt-3">
                    <h5 className='max-temperature'>{Math.round(props.data.temp.max)}° {" "}
                        <span className='min-temperature'>{Math.round(props.data.temp.min)}°
                        </span>
                    </h5>
                    <FormattedDate date= {new Date(props.data.dt* 1000)} />
                </div>
           </div>       
        </div>
    )
}


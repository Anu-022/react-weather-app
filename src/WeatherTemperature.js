import React, {useState} from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

   // convert celsius to Fahrenheit
        function showFahrenheitTemp(event) {
            event.preventDefault();
            setUnit("Fahrenheit");
        }

        function showCelsiusTemp(event) {
            event.preventDefault();
            setUnit("celsius");
        }
        if (unit === "celsius") {
    return(
        <div className='WeatherTemperature'>
            <span className="temp-style">{props.celsius}</span>
            <span className="units">
                °C | {" "}
                <a href="/" onClick= {showFahrenheitTemp}>
                    °F
                </a>
            </span>
        </div>
    );
     } else {
         let fahrenheit = (props.celsius * 9/5) + 32;
         return (
            <div className='WeatherTemperature'>
            <span className="temp-style">{Math.round(fahrenheit)}</span>
            <span className="units">
            <a href="/" onClick={showCelsiusTemp}>
                °C | {" "}
            </a>
               °F
               </span>
      </div>
         );
     } 
}
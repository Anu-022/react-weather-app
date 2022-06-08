import React from "react";
import MainDisplay from "./MainDisplay";
import "./MainContainer.css";

export default function MainContainer() {
/*
    const [ready, setReady] = useState(false);
    const[weatherObj, setWeatherObj] = useState({});
    function getApi(response) {
        setWeatherObj(response.data.main);
        setReady(true);
        }
    }
    if(ready) {
        */
    return (
        <div className="MainContainer">
            <MainDisplay />
            <div className="copyright">Weather App is Designed by AnuSanya and 
            <a href="https://github.com/Anu-022/react-weather-app"> opensourced</a>
            </div>
        </div>
    )
}
/*
else {
const apiKey = "a2cad1909b029ab4483669f9e477787b";
let city ='Lagos';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(getApi);
 
 return "Loading..."
}
*/
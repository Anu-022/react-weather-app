import React from "react";
import SearchEngine from "./SearchEngine";
import MainDisplay from "./MainDisplay";
import Forecast from "./Forecast";
import "./MainContainer.css";

export default function MainContainer() {
    return (
        <div className="MainContainer">
            <div class="row">
                <div class= "col-md-7">
                    <SearchEngine />  
                    <MainDisplay /> 
                </div>
                <div class= "col-md-5">
                    <Forecast />
                </div>
            </div>
        </div>
    )
}
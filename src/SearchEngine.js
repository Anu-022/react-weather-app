import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
    return (
        <div className="SearchEngine mt-4 mb-4">
            <form>
            <input type= "search" placeholder="Search a city..."/>
            <button type="submit">Search</button>
        </form>
        </div>
        
    )
}
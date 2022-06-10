import React from "react";

export default function formattedtDate(props) {
    let date = props.date.getDate();
    let year =props.date.getFullYear();
    let months =["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
    let month = months[props.date.getMonth()];
    return(
        <div>
           {month} {date}, {year}
        </div>
    ) 
         
}
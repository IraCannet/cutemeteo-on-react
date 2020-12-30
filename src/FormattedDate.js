import React from "react";

export default function FormattedDate(props){
    let days = [
        "Sunday",
        "Monday", 
        "Tuesdays", 
        "Wednesday", 
        "Thursday",
        "Friday",
        "Saturday" 
    ];
    console.log(props.date);
    let day = props.date.getDay();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (hours<10) hours=`0${hours}`;
    if (minutes<10) minutes=`0${minutes}`;
    return (
    <div>
        {day} {hours}:{minutes}
    </div>
    );
}
import React from 'react';
import './CityandTime.css';

function CityandTime(props) {
    
    let now = new Date();
    let inputcity_timezone_offset = props.info.timezone; //offset in seconds between the input city's timezone and the UTC timezone
    //note that UTC is the reference time zone and corresponds to the WINTER time in the greenwich meridian
    let hours_of_inputcity = now.setHours(now.getUTCHours() + inputcity_timezone_offset/3600)

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let time = new Date(hours_of_inputcity);
    
    let weekday = week[time.getDay()];
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let day = time.getDate();
    let month = months[time.getMonth()];
    let year = time.getFullYear();

    if (minutes < 10) minutes = `0${minutes}`;
    if (hours < 10) hours = `0${hours}`;

    return(
        <div className="CityandTime">
            <i className="fas fa-map-marker-alt" />
            <p id="city"> {props.info.city} </p>
            <p id="time"> {hours}:{minutes}</p>
            <p id="date"> {weekday}, {day} {month} {year}</p>
        </div> 
    );
}

export default CityandTime;
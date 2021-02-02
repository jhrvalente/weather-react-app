import React from 'react';
import WeatherIcon from './WeatherIcon';

import './NextDay.css';

function NextDay(props){
    
    function getDay(){
        let day = (new Date(date*1000)).getDay();
        let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return week[day];
    }

    let date = props.info.daily[props.i].dt;
    let tempMin = Math.round(props.info.daily[props.i].temp.min);
    let tempMax = Math.round(props.info.daily[props.i].temp.max);
    let icon = props.info.daily[props.i].weather[0].icon;
    
    function convertFarhrenheit(temp){
        let fahrenheit = (temp*9/5 ) + 32;
        return fahrenheit;
    }

    if (props.unit === "celsius"){
        return(
            <div className="NextDay">
                <div className="row">
                    <div className="col-7">
                        <p id="day"> {getDay()} </p>
                        <p className="forecast">
                            <span id="max"> {tempMax}ºC</span>
                            <span> | </span> 
                            <span id="min"> {tempMin} ºC </span>
                        </p>
                    </div>
                    <div className="col-5">
                        <WeatherIcon  iconCode={icon} size="small"/>
                    </div>
                </div>
            </div> 
        );
    }
    else {
        return(
            <div className="NextDay">
                <div className="row">
                    <div className="col-7">
                        <p id="day"> {getDay()} </p>
                        <p className="forecast">
                            <span id="max"> {Math.round(convertFarhrenheit(tempMax))} F </span>
                            <span>|</span> 
                            <span id="min"> {Math.round(convertFarhrenheit(tempMin))} F </span>
                        </p>
                    </div>
                    <div className="col-5">
                        <WeatherIcon  iconCode={icon} size="small"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NextDay;
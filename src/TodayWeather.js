import React from 'react';
import WeatherIcon from './WeatherIcon';

import './TodayWeather.css';

function TodayWeather(props){

    function convertToFahrenheit(){
        let fahrenheit = (props.info.temperature* 9/5)+32;
        return fahrenheit;
    }
   
    if (props.unit === "celsius"){
        return(
            <div className="TodayWeather" >
                <div className="row" id="rectangle">
                    <div className="col-3">
                        <WeatherIcon iconCode={props.info.icon}/> 
                    </div>   
                    <div className="col-5">
                        <p id="temp">{Math.round(props.info.temperature)} ºC </p>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-tint"/>
                        <span id="humidity">{props.info.humidity} % </span>
                        <br />
                        <i className="fas fa-wind" />
                        <span id="wind">{Math.round(props.info.wind)} m/s </span>
                    </div>
                    <p id="description">{props.info.description}</p>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="TodayWeather" >
                <div className="row" id="rectangle">
                    <div className="col-3">
                        <WeatherIcon iconCode={props.info.icon}/> 
                    </div>   
                    <div className="col-5">
                        <p id="temp">{Math.round(convertToFahrenheit())} F </p>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-tint"/>
                        <span id="humidity">{props.info.humidity} % </span>
                        <br />
                        <i className="fas fa-wind"/>
                        <span id="wind">{Math.round(props.info.wind)} m/s </span>
                    </div>
                    <p id="description">{props.info.description}</p>
                </div>
            </div>
        );
    }
}

export default TodayWeather;
    
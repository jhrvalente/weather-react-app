import React, {useState} from "react";
import NextDay from './NextDay';
import axios from "axios";

function Forecast(props){
    const apiKey = "fab5f60356d4f31a390522bd136e2a65";
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState(null);
    
    function getForecast(response){
        setForecast(response.data);
        setLoaded(true);
    }

    function search(){
       let forecast_api_URL=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
       axios.get(forecast_api_URL).then(getForecast);
    }

    if (loaded && props.lat === forecast.lat && props.lon === forecast.lon){
        return (
            <div>
                <NextDay i={1} info={forecast} unit={props.unit} />
                <NextDay i={2} info={forecast} unit={props.unit} />
                <NextDay i={3} info={forecast} unit={props.unit} />
                <NextDay i={4} info={forecast} unit={props.unit} />
                <NextDay i={5} info={forecast} unit={props.unit} />
                <NextDay i={6} info={forecast} unit={props.unit} />
            </div>
        );
    }
    else{
        search();
        return "Loading..."
    } 
} 
    
export default Forecast;
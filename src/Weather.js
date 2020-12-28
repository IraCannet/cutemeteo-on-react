import React, { useState } from 'react';
import axios from 'axios';
import "./Weather.css";

export default function Weather() {
    const[ready, setReady]= useState(false);
    const[weatherData, setWeatherData]= useState({});
    const [temperature, setTemperature] = useState(null);
    
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name
        });
        setReady(true);
    }
    
    if(ready){

    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>{weatherData.description}</li>
            </ul>
            <div className="row mt-3"> 
                <div className="col-6">
                    <div className="clearfix">
                        <img 
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                            alt="Mostly Cloudy"
                            className="float-left"
                            />
                        <div className="float-left">
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div> 
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 73%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    } else{
        const apiKey = "c4ec87540b7d8d71553d9dad178f26b1";
        let units = "metric";
        let city = "Paris";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        return "Loading..";
    }
}
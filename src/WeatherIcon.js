import React from "react";
import { WeatherThemeProvider, Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';

export default function WeatherIcon(props) {
  const theme = {
  backgroundColor: 'Lavender',
  sunColor: 'blue',
  raysColor: 'OrangeRed',
};
 


    return(
  <div>
  <WeatherThemeProvider theme={theme}>
    <Sunny />
  </WeatherThemeProvider>
  </div>
  );
}
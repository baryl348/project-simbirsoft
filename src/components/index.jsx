import Axios from "axios";
import React, { useEffect, useState } from "react";

const URL =
  "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";

export const Content = () => {
  const [cities, setCities] = useState(
    [
      { name: "Moscow", zip: "2122265" },
      { name: "London", zip: "44418" },
      { name: "San Francisco", zip: "2487956" },
      { name: "St Petersburg", zip: "2123260" },
    ],
    { activePlace: 0 },
    { weatherData: null }
  );

  useEffect(() => {
    Axios.get(`${URL}${cities.zip}/`).then((response) => response.data);
  });

  const consolidated_weather = cities.consolidated_weather;
  //   if (!consolidated_weather) return <div>loading</div>;
  //   const weather = consolidated_weather[0];
  //   const {
  //     weather_state_name,
  //     the_temp,
  //     max_temp,
  //     min_temp,
  //     wind_speed,
  //   } = weather;
  //   const imgUrl = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
  return (
    <div>
      <div>
        {cities.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              cities({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
      </div>
      {/* <div>
        <h1>
          {weather_state_name}
          <img src={imgUrl} />
        </h1>
        <p>Current: {the_temp}°</p>
        <p>High: {max_temp}°</p>
        <p>Low: {min_temp}°</p>
        <p>Wind Speed: {wind_speed}</p>
      </div> */}
    </div>
  );
};

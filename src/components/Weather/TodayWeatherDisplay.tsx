import React, { useCallback, useMemo } from "react";

import WeatherStateDisplay from "./WeatherStateDisplay";
import useFetch from "../../hooks/use-fetch";
import CurrentWeatherData from "../../types/CurrentWeatherData";
import TemperatureDisplay from "./TemperatureDisplay";

import styles from "../../styles/Weather/TodayWeatherDisplay.module.css";
import AuxiliaryWeatherDataDisplay from "./AuxiliaryWeatherDataDisplay";

const TodayWeatherDisplay = () => {
	// TODO: use geocoding API to get location
	// 			 and then fetch weather data
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

	const weatherDataTransformer = useCallback((data: any) => {
		let weatherData: CurrentWeatherData;

		weatherData = {
			weatherStateData: {
				main: data.weather[0].main,
				description: data.weather[0].description,
				icon: data.weather[0].icon,
				tempMin: Math.round(data.main.temp_min),
				tempMax: Math.round(data.main.temp_max),
			},
			temperatureData: {
				realTemperature: Math.round(data.main.temp),
				feelTemperature: Math.round(data.main.feels_like),
				epochTime: data.dt,
			},
			auxiliaryWeatherData: {
				pressure: data.main.pressure,
				humidity: data.main.humidity,
				windSpeed: data.wind.speed,
				windAngle: data.wind.deg,
			},
		};

		return weatherData;
	}, []);

	const weatherRequest = useMemo(() => new Request(weatherUrl), [weatherUrl]);
	const { isLoading, data, fetchError } = useFetch<CurrentWeatherData>(
		weatherRequest,
		weatherDataTransformer
	);

	if (isLoading || !data) {
		return <p>Loading...</p>;
	}

	return (
		<div className={styles["today-weather"]}>
			<div className="m-2 p-4">
				<WeatherStateDisplay {...data.weatherStateData} />
				<TemperatureDisplay {...data.temperatureData} />
			</div>
			<AuxiliaryWeatherDataDisplay {...data.auxiliaryWeatherData} />
		</div>
	);
};

export default TodayWeatherDisplay;

import React from "react";
import TodayWeatherDisplay from "./TodayWeatherDisplay";

import styles from "../../styles/Weather/WeatherDashboard.module.css";

const WeatherDashboard = () => {
	return (
		<div className={styles["dashboard"]}>
			<TodayWeatherDisplay />
		</div>
	);
};

export default WeatherDashboard;

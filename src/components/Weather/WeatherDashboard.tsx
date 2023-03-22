import React from "react";
import Card from "../UI/Card";
import TodayWeatherDisplay from "./TodayWeatherDisplay";

import styles from "../../styles/Weather/WeatherDashboard.module.css";

const WeatherDashboard = () => {
	return (
		<Card className={styles["dashboard"]}>
			<TodayWeatherDisplay />
		</Card>
	);
};

export default WeatherDashboard;

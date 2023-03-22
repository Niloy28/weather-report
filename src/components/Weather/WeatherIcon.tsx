import React from "react";

import styles from "../../styles/Weather/WeatherIcon.module.css";

interface WeatherIconProps {
	iconID: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = (props) => {
	return (
		<img
			className={styles["weather-icon"]}
			src={`https://openweathermap.org/img/wn/${props.iconID}@4x.png`}
			alt=""
		/>
	);
};

export default WeatherIcon;

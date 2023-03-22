import React from "react";
import WeatherIcon from "./WeatherIcon";

import styles from "../../styles/Weather/WeatherStateDisplay.module.css";
import WeatherStateData from "../../types/WeatherStateData";

const WeatherStateDisplay: React.FC<WeatherStateData> = (props) => {
	return (
		<div className={styles["weather-state"]}>
			<WeatherIcon iconID={props.icon} />
			<div>
				<div>{props.main}</div>
				<div>
					{props.tempMin}° / {props.tempMax}°
				</div>
			</div>
		</div>
	);
};

export default WeatherStateDisplay;

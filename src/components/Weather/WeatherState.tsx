import React from "react";
import WeatherIcon from "./WeatherIcon";

import styles from "../../styles/Weather/WeatherState.module.css";

interface WeatherStateProps {
	tempMin: number;
	tempMax: number;
	description: string;
	iconID: string;
}

const WeatherState: React.FC<WeatherStateProps> = (props) => {
	return (
		<div className={styles["weather-state"]}>
			<WeatherIcon iconID={props.iconID} />
			<div>
				<div>{props.description}</div>
				<div>
					{props.tempMin}° / {props.tempMax}°
				</div>
			</div>
		</div>
	);
};

export default WeatherState;

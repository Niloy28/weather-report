import React from "react";
import AuxiliaryWeatherData from "../../types/AuxiliaryWeatherData";

import styles from "../../styles/Weather/AuxiliaryWeatherDataDisplay.module.css";

const AuxiliaryWeatherDataDisplay: React.FC<AuxiliaryWeatherData> = (props) => {
	return (
		<div className={styles["aux-weather"]}>
			<div>
				<div>Humidity: {props.humidity}%</div>
				<div>Pressure: {props.pressure}mbar</div>
			</div>
			<div>
				<div>Wind Speed: {props.windSpeed} mph</div>
				<div>Wind Angle: {props.windAngle} deg</div>
			</div>
		</div>
	);
};

export default AuxiliaryWeatherDataDisplay;

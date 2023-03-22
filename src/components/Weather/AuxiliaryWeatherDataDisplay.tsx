import React from "react";
import AuxiliaryWeatherData from "../../types/AuxiliaryWeatherData";

import styles from "../../styles/Weather/AuxiliaryWeatherDataDisplay.module.css";

const AuxiliaryWeatherDataDisplay: React.FC<AuxiliaryWeatherData> = (props) => {
	return (
		<div className={styles["aux-weather"]}>
			<div>
				<p>Humidity:</p>
				<p>{props.humidity}%</p>
			</div>
			<div>
				<p>Pressure:</p>
				<p>{props.pressure} mbar</p>
			</div>

			<div>
				<p>Wind Speed:</p>
				<p>{props.windSpeed} mph</p>
			</div>
			<div>
				<p>Wind Angle:</p>
				<p>{props.windAngle} deg</p>
			</div>
		</div>
	);
};

export default AuxiliaryWeatherDataDisplay;

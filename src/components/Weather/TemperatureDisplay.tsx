import React from "react";

import styles from "../../styles/Weather/TemperatureDisplay.module.css";
import TemperatureData from "../../types/TemperatureData";

const TemperatureDisplay: React.FC<TemperatureData> = (props) => {
	const time = new Date(props.epochTime * 1000);

	return (
		<div>
			<div
				className={styles["time-display"]}
			>{`Snapshot at ${time.toLocaleTimeString()}`}</div>
			<div className={styles["temp-display"]}>
				<div className={styles["real-temp"]}>
					{props.realTemperature}
					<div>°C</div>
				</div>
				<div className={styles["feel-temp"]}>
					<p>Feels like</p>
					<div>
						{props.feelTemperature}
						<div>°C</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TemperatureDisplay;

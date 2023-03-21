import React from "react";

interface WeatherIconProps {
	iconID: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = (props) => {
	return (
		<img
			src={`https://openweathermap.org/img/wn/${props.iconID}@4x.png`}
			alt=""
		/>
	);
};

export default WeatherIcon;

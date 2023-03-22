import WeatherStateData from "./WeatherStateData";
import TemperatureData from "./TemperatureData";
import AuxiliaryWeatherData from "./AuxiliaryWeatherData";

type CurrentWeatherData = {
	weatherStateData: WeatherStateData;
	temperatureData: TemperatureData;
	auxiliaryWeatherData: AuxiliaryWeatherData;
};

export default CurrentWeatherData;

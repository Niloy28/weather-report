import React from "react";
import NavBar from "./components/UI/NavBar";
import WeatherDashboard from "./components/Weather/WeatherDashboard";

import styles from "./styles/App.module.css";

function App() {
	return (
		<div className={styles["app"]}>
			<header className={styles["app-header"]}>
				<NavBar
					heading="Weather Report"
					className="bg-slate-600 bg-opacity-30"
				/>
			</header>
			<main>
				<WeatherDashboard />
			</main>
		</div>
	);
}

export default App;

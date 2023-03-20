import React from "react";
import NavBar from "./components/UI/NavBar";

function App() {
	return (
		<div>
			<header className="App-header">
				<NavBar
					heading="Weather Report"
					className="bg-slate-600 bg-opacity-30"
				/>
			</header>
			<main></main>
		</div>
	);
}

export default App;

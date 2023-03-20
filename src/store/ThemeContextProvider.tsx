import React, { useEffect, useState } from "react";
import ThemeContext from "./theme-context";
import ThemeData, { ThemeType } from "../types/ThemeData";

interface ThemeContextProviderProps {
	children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = (props) => {
	const [theme, setTheme] = useState<string>("");

	useEffect(() => {
		const oldTheme = localStorage.getItem("theme");
		if (oldTheme) {
			setTheme(oldTheme);
		} else {
			const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
			if (darkThemeMq.matches) {
				// Theme set to dark.
				setTheme(ThemeType.DARK);
			} else {
				// Theme set to light.
				setTheme(ThemeType.LIGHT);
			}
		}
	}, []);

	useEffect(() => {
		document.getElementById("html-root")!.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleThemeHandler = () => {
		let newTheme: string;

		switch (theme) {
			case ThemeType.LIGHT:
				newTheme = ThemeType.DARK;
				break;

			case ThemeType.DARK:
				newTheme = ThemeType.LIGHT;
				break;

			default:
				newTheme = theme;
				break;
		}
		setTheme(newTheme);
	};

	const themeData: ThemeData = {
		theme,
		toggleTheme: toggleThemeHandler,
	};

	return (
		<ThemeContext.Provider value={themeData}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;

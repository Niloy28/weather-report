import { createContext } from "react";
import ThemeData from "../types/ThemeData";

const defaultTheme: ThemeData = {
	theme: "",
	toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeData>(defaultTheme);

export default ThemeContext;

export enum ThemeType {
	LIGHT = "cmyk",
	DARK = "night",
}

type ThemeData = {
	theme: string;
	toggleTheme: () => void;
};

export default ThemeData;

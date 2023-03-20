import React, { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import { ThemeType } from "../../types/ThemeData";

interface NavBarProps {
	heading: string;
	className?: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
	const themeCtx = useContext(ThemeContext);

	return (
		<div className={`navbar ${props.className}`}>
			<div className="flex-1 justify-center">
				<h1 className="text-3xl font-semibold">{props.heading}</h1>
			</div>
			<div className="flex-none">
				<label className="label cursor-pointer mr-5">
					<div className="p-2">🌑</div>
					<input
						type="checkbox"
						className="toggle"
						onChange={themeCtx.toggleTheme}
						checked={themeCtx.theme === ThemeType.LIGHT}
					/>
					<div className="p-2">🌞</div>
				</label>
			</div>
		</div>
	);
};

export default NavBar;

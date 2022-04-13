import React from "react";
import ArrowSvg from "../../assets/Vector.svg";

const StatePanel = ({ title, /*backHandler,*/ handleSubmit }) => {
	return (	
		<header>
			<button /*onClick={backHandler}*/>
				<svg
					width="47"
					height="80"
					viewBox="0 0 47 80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M46.68 7.48039L39.6 0.400391L0 40.0004L39.6 79.6004L46.68 72.5204L14.16 40.0004L46.68 7.48039Z"
						fill="black"
					/>
				</svg>
			</button>
			<span>{title}</span>
			<button onClick={handleSubmit}>Done</button>
		</header>
	);
};

export default StatePanel;

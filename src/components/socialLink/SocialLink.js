import { React, useState } from "react";

const SocialLink = (props) => {
	const [input, setInput] = useState("");
	const [style, setStyle] = useState("");

	const handleClick = () => {
		if (style === "") {
			setStyle("active");
		} else {
			setStyle("");
		}
	};

	return (
		<div className="social-item">
			<img src={props.imgPath} alt="" onClick={handleClick} />
			<div className={style}>
				<input
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					placeholder="add link"
					maxLength="255"
				/>
				<button type="button" onClick={handleClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default SocialLink;

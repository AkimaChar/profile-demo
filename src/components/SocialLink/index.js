import { React, useState } from "react";

const SocialLink = ({ imgPath, handleClick, style }) => {
	const [input, setInput] = useState("");

	return (
		<div className={"social-item " + style}>
			<img src={imgPath} alt="" onClick={(event) => handleClick(event)} />
			<div>
				<input
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					placeholder="add link"
					maxLength="255"
				/>
				<button type="button" onClick={(event) => handleClick(event)}>
					Save
				</button>
			</div>
		</div>
	);
};

export default SocialLink;

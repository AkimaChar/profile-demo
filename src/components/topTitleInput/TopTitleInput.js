import { React, useState } from "react";

const TopTitleInput = (props) => {
	const [input, setInput] = useState("");

	return (
		<label htmlFor={props.fieldName} className="additional-info-item">
			<span>{props.fieldName}</span>
			<input
				type="text"
				id={props.fieldName}
				maxLength="255"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
		</label>
	);
};

export default TopTitleInput;

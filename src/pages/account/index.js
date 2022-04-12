import { React, useState } from "react";
import "../../styles/profile.scss";
import Profile from "./accountSections/Profile";
import linkedIn from "../../assets/linkedin.png";

const Account = () => {
	const [inputs, setInputs] = useState("");

	const [visible, setVisible] = useState(true);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	return (
		<div className="wrapper">
			<div className="account-main-info">
				<div>
					<img src={linkedIn} className="account-img" alt="" />
					<input
						type="text"
						name="name"
						placeholder="Name Surmane"
						value={inputs.initials}
						onChange={handleChange}
						maxLength="255"
					/>
				</div>
				<div>
					<input
						type="text"
						name="company-name"
						placeholder="Company"
						value={inputs.company}
						onChange={handleChange}
						maxLength="255"
					/>
					<input
						type="text"
						name="position"
						placeholder="Position"
						value={inputs.position}
						onChange={handleChange}
						maxLength="255"
					/>
				</div>
				<input
					type="text"
					name="hashtags"
					placeholder="Add hashtags"
					value={inputs.hashtags}
					onChange={handleChange}
					maxLength="255"
				/>
			</div>
			<div className="account-tabs">
				<button className="profile active">Profile</button>
				<button className="connections">Connections</button>
				<button className="investments">Investments</button>
				<button className="newsfeed">News feed</button>
			</div>
			<Profile />
		</div>
	);
};

export default Account;

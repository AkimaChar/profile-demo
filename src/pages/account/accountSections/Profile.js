import React from "react";
import SocialLink from "../../../components/SocialLink";
import facebook from "../../../assets/fb.png";
import linkedIn from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import telegram from "../../../assets/telegram.png";
import pinterest from "../../../assets/pinterest.png";
import CustomInput from "../../../components/CustomInput";

const Profile = ({ inputs, handleChange, handleClick, style }) => {
	return (
		<div>
			{/* <div className="bar">
			</div> */}
			<div className="account-social-list">
				<svg
					className="social-arrow"
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
				<SocialLink imgPath={linkedIn} handleClick={handleClick} style={style} />
				<SocialLink imgPath={facebook} handleClick={handleClick} style={style} />
				<SocialLink imgPath={twitter} handleClick={handleClick} style={style} />
				<SocialLink imgPath={telegram} handleClick={handleClick} style={style} />
				<SocialLink imgPath={pinterest} handleClick={handleClick} style={style} />
			</div>

			<div className="account-additional-info-list">
				<CustomInput
					onChange={handleChange}
					value={inputs.intro}
					name="intro"
					label="Intro"
					type="text"
				/>
				<CustomInput
					onChange={handleChange}
					value={inputs.web}
					name="web"
					label="Web"
					type="url"
				/>
				<CustomInput
					onChange={handleChange}
					value={inputs.email}
					name="email"
					label="Email"
					type="email"
					required
				/>
				<CustomInput
					onChange={handleChange}
					value={inputs.phones}
					name="phones"
					label="Phones"
					type="number"
					required
				/>
				<CustomInput
					onChange={handleChange}
					value={inputs.location}
					name="location"
					label="Location"
					type="text"
				/>
			</div>
		</div>
	);
};

export default Profile;

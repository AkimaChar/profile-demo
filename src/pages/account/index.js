import { React, useState } from "react";
import "../../styles/profile.scss";
import Profile from "./accountSections/Profile";
import API from "../../api";
import CustomInput from "../../components/CustomInput";
import user from "../../assets/user.png";
import StatePanel from "../../components/StatePanel";

const Account = () => {
	const [inputs, setInputs] = useState({
		hashtags: "",
		company: "",
		position: "",
		name: "",
		intro: "",
		web: "",
		email: "",
		phones: "",
		location: "",
	});

	const [style, setStyle] = useState("");

	const isEmail = (value) => {
		const regexp =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regexp.test(value);
	};
	const isPhone = (value) => {
		return value.length <= 11;
	};

	const handleChange = (e) => {
		setInputs((values) => ({ ...values, [e.target.name]: e.target.value.substr(0, 255) }));
	};

	const handleSubmit = async () => {
		if (!isEmail(inputs.email)) {
			alert("Invalid email \nMake sure your email same to 'example@email.com'");
		} else if (!isPhone(inputs.phones)) {
			// console.log("phones invalid");
		} else {
			try {
				const { data } = await API.post(
					`api.timesoftware.pro/bizdevim/insert_user/email=${
						inputs.email
					}&user_type=personal&name=${inputs.name.split(" ")[0]}&surname=${
						inputs.name.split(" ")[1]
					}&position=${inputs.position}&company=${inputs.company}&phones=${
						inputs.phones
					}&location=${inputs.location}&website=${inputs.web}`
				);
				console.log(data);
			} catch (error) {
				console.log(error.message);
			}
		}
	};

	const handleClick = (e) => {
		if (e.target.tagName !== "BUTTON") {
			document.querySelectorAll(`.${e.target.parentNode.classList}`).forEach((e) => {
				e.style.display = "none";
			});
			document.querySelector(".social-arrow").style.display = "none";
			e.target.parentNode.classList.add("active");
			e.target.parentNode.style.display = "flex";
		} else {
			e.target.parentNode.parentNode.classList.remove("active");
			document.querySelector(".social-arrow").style.display = "flex";
			document
				.querySelectorAll(`.${e.target.parentNode.parentNode.classList}`)
				.forEach((el) => {
					el.style.display = "flex";
				});
		}
	};

	return (
		<div className="wrapper">
			<StatePanel
				/*backHandler={backHandler}*/ title="Create personal"
				handleSubmit={handleSubmit}
			/>
			<div className="account-main-info">
				<div>
					<img src={user} className="account-img" alt="" />
					<CustomInput
						type="text"
						name="name"
						placeholder="Name Surmane"
						value={inputs.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<CustomInput
						type="text"
						name="company"
						placeholder="Company"
						value={inputs.company}
						onChange={handleChange}
					/>
					<CustomInput
						type="text"
						name="position"
						placeholder="Position"
						value={inputs.position}
						onChange={handleChange}
					/>
				</div>
				<CustomInput
					type="text"
					name="hashtags"
					placeholder="Add hashtags"
					value={inputs.hashtags}
					onChange={handleChange}
				/>
			</div>
			<div className="account-tabs">
				<button className="profile active">Profile</button>
				<button className="connections">Connections</button>
				<button className="investments">Investments</button>
				<button className="newsfeed">News feed</button>
			</div>

			<Profile
				inputs={inputs}
				handleChange={handleChange}
				handleClick={handleClick}
				style={style}
			/>
		</div>
	);
};

export default Account;

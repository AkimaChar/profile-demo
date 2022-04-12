import React from "react";
import SocialLink from "../../../components/socialLink/SocialLink";
import TopTitleInput from "../../../components/topTitleInput/TopTitleInput";
import linkedIn from "../../../assets/linkedin.png";

const Profile = () => {
	return (
		<div>
			<div className="account-social-list">
				<SocialLink saveLink="vk.com" imgPath={linkedIn} />
				<SocialLink saveLink="vk.com" imgPath={linkedIn} />
				<SocialLink saveLink="vk.com" imgPath={linkedIn} />
				<SocialLink saveLink="vk.com" imgPath={linkedIn} />
				<SocialLink saveLink="vk.com" imgPath={linkedIn} />
			</div>
			<div className="account-additional-info-list">
				<TopTitleInput fieldName="Intro" />
				<TopTitleInput fieldName="Web" />
				<TopTitleInput fieldName="Email" />
				<TopTitleInput fieldName="Phones" />
				<TopTitleInput fieldName="Location" />
			</div>
		</div>
	);
};

export default Profile;

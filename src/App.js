import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectPage from "./ProjectPage";

const data = {
	projectDetails: {
		Title: "Mastercraft Bamboo Monitor Riser",
		subtitle:
			"A beautiful & handcrafted monitor stand to reduce neck and eye strain",
		deadlineDate: new Date("2024-03-25"),
		description:
			"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on then task at hand.\n\nFeaturing artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
	},
	fundDetails: {
		amountNeeded: 100000,
		amountRaised: 89914,
		totalBackers: 5007,
	},
	pledgeOptions: [
		{
			rewardName: "Pledge with no reward",
			pledgeDescription:
				"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
			totalAmount: null,
			pledgesMade: 99,
			hasReward: false,
			minimumPledge: 1,
		},
		{
			rewardName: "Bamboo Stand",
			pledgeDescription:
				"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
			totalAmount: 200,
			pledgesMade: 99,
			hasReward: true,
			minimumPledge: 25,
		},
		{
			rewardName: "Black Edition Stand",
			pledgeDescription:
				"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
			totalAmount: 100,
			pledgesMade: 36,
			hasReward: true,
			minimumPledge: 75,
		},
		{
			rewardName: "Mahogany Special Edition",
			pledgeDescription:
				"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
			totalAmount: 50,
			pledgesMade: 49,
			hasReward: true,
			minimumPledge: 200,
		},
	],
};

function App() {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return (
		<div className="app">
			<Header
				setShowMobileNav={setShowMobileNav}
				showMobileNav={showMobileNav}
			/>
			<ProjectPage data={data} />
		</div>
	);
}

export default App;

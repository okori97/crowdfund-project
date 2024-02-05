import React, { useState, useEffect } from "react";
import update from "immutability-helper";
import calcDaysLeft from "./utils/dateUtils";
import calcProgressPercentage from "./utils/progressBarUtils";
import { numberWithCommas } from "./utils/numberUtils";
import SelectionModal from "./components/SelectionModal";
import SuccessModal from "./components/SuccessModal";
import ProgressSection from "./components/ProgressSection";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";

export default function ProjectPage(props) {
	const [projectData, setProjectData] = useState(props.data);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [pledgeAmount, setPledgeAmmount] = useState(0);
	const [selectedOption, setSelectedOption] = useState(undefined);

	let { amountNeeded, amountRaised, totalBackers } = projectData.fundDetails;
	let { pledgeOptions } = projectData;
	let { Title, subtitle, deadlineDate, description } =
		projectData.projectDetails;

	let progressPercentage = calcProgressPercentage(amountNeeded, amountRaised);
	let daysLeft = calcDaysLeft(deadlineDate);
	totalBackers = numberWithCommas(totalBackers);

	const toggleModal = (event) => {
		event.preventDefault();
		let body = document.getElementsByTagName("body")[0];
		setShowModal(!showModal);
		removeScroll(body);
	};

	useEffect(() => {
		if (pledgeAmount > 0) {
			const updatedProject = update(projectData, {
				fundDetails: {
					amountRaised: {
						$apply: (num) => {
							return num + pledgeAmount * 1;
						},
					},
					totalBackers: {
						$apply: (backers) => {
							return 1 * backers + 1;
						},
					},
				},
				pledgeOptions: {
					$apply: (x) => {
						const test = x.map((item) => {
							if (item == selectedOption) {
								item.pledgesMade++;
							}
						});
						return x;
					},
				},
			});
			setPledgeAmmount(0);
			setSelectedOption(undefined);
			setProjectData(updatedProject);
		}
	}, [pledgeAmount]);

	return (
		<>
			<div class="project-wrapper">
				<HeaderSection
					toggleModal={toggleModal}
					isBookmarked={isBookmarked}
					setIsBookmarked={setIsBookmarked}
					Title={Title}
					subtitle={subtitle}
				/>

				<ProgressSection
					numberWithCommas={numberWithCommas}
					amountNeeded={amountNeeded}
					amountRaised={amountRaised}
					totalBackers={totalBackers}
					daysLeft={daysLeft}
					progressPercentage={progressPercentage}
				/>

				<AboutSection
					description={description}
					pledgeOptions={pledgeOptions}
					toggleModal={toggleModal}
					setPledgeAmmount={setPledgeAmmount}
				/>
			</div>

			{showModal && (
				<SelectionModal
					setShowSuccessModal={setShowSuccessModal}
					setSelectedOption={setSelectedOption}
					list={pledgeOptions}
					handleClick={toggleModal}
					setPledgeAmmount={setPledgeAmmount}
				/>
			)}
			{showSuccessModal && (
				<SuccessModal
					setShowSuccessModal={setShowSuccessModal}
					handleClick={toggleModal}
				/>
			)}
		</>
	);

	function removeScroll(body) {
		if (body.style.overflow == "hidden") {
			body.style.overflow = "visible";
		} else {
			body.style.overflow = "hidden";
		}
	}
}

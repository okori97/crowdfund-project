import React from "react";
import "../styles/ProgressSection.css";

export default function ProgressSection(props) {
	let {
		numberWithCommas,
		totalBackers,
		daysLeft,
		amountNeeded,
		amountRaised,
		progressPercentage,
	} = props;
	return (
		<section class="modal">
			<div class="progress-row">
				<div class="progress-detail">
					<h1 class="data">${numberWithCommas(amountRaised)}</h1>
					<p>of ${numberWithCommas(amountNeeded)} backed</p>
				</div>
				<div class="progress-detail">
					<h1 class="data">{totalBackers}</h1>
					<p>total backers</p>
				</div>
				<div class="progress-detail">
					<h1 class="data">{Math.floor(daysLeft)}</h1>
					<p>days left</p>
				</div>
			</div>
			<div class="progress-bar">
				<div class="progress-bar-base">
					<div
						class="progress-bar-fill"
						style={{ width: progressPercentage + "%" }}
					></div>
				</div>
			</div>
		</section>
	);
}

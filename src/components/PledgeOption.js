import React from "react";
import { calcRemainingPledges } from "../utils/numberUtils";
import "../styles/PledgeOption.css";

export default function PledgeOption(props) {
	let {
		setSelectedOption,
		selectedOptionIndex,
		setSelectedOptionIndex,
		handleClick,
		value,
	} = props;

	let {
		rewardName,
		pledgeDescription,
		totalAmount,
		pledgesMade,
		minimumPledge,
		hasReward,
	} = props.option;

	let { forSelectModal } = props;

	const handleChange = (e) => {
		let eventAsInt = 1 * e.target.value;
		setSelectedOptionIndex(eventAsInt);
		setSelectedOption(props.option);
	};

	let remaining = calcRemainingPledges(totalAmount, pledgesMade);

	if (hasReward == false && forSelectModal == false) {
		return;
	}

	return (
		<label>
			<div
				class={
					"pledge-option" +
					(remaining == 0 ? " disabled" : "") +
					(forSelectModal == true ? " no-padding" : "")
				}
			>
				{forSelectModal == true && (
					<>
						<div class="pledge-option-container">
							<div className="pledge-option-header-radio">
								<input
									type="radio"
									name="pledge"
									value={value}
									checked={selectedOptionIndex == value}
									onChange={handleChange}
									disabled={remaining == 0}
								/>
								<div class="pledge-option-container-inner">
									<div class="flex-row">
										<div class="pledge-option-details">
											<h4>{rewardName}</h4>
											{minimumPledge > 1 && (
												<p class="pledge-option-info">
													Pledge ${minimumPledge} or
													more
												</p>
											)}
										</div>
										{remaining != undefined && (
											<div class="pledge-option-count mobile-hide">
												<h1 class="data small">
													{remaining}
												</h1>
												<p>left</p>
											</div>
										)}
									</div>
								</div>
							</div>
							<p>{pledgeDescription}</p>
							{remaining != undefined && (
								<div class="pledge-option-count mobile-show">
									<h1 class="data small">{remaining}</h1>
									<p>left</p>
								</div>
							)}
						</div>

						{selectedOptionIndex == value && (
							<div class="pledge-option-input">
								<p>Enter your pledge</p>
								<div class="flex-row">
									<div className="input-amount">
										<input
											type="number"
											min={minimumPledge}
											name="pledge"
										/>
									</div>

									<button type="submit" class="primary">
										Continue
									</button>
								</div>
							</div>
						)}
					</>
				)}

				{forSelectModal != true && (
					<>
						<div class="pledge-option-header">
							<h4>{rewardName}</h4>
							<p class="pledge-option-info">
								{`Pledge $${minimumPledge} or more`}`
							</p>
						</div>
						<p>{pledgeDescription}</p>
						<div class="flex-row">
							<div class="pledge-option-count">
								<h1 class="data">{remaining}</h1>
								<p>left</p>
							</div>
							<button
								class={
									"primary" +
									(remaining > 0 ? "" : " disabled")
								}
								onClick={
									remaining > 0 ? handleClick : undefined
								}
							>
								Select Reward
							</button>
						</div>
					</>
				)}
			</div>
		</label>
	);
}

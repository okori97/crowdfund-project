import React from "react";
import PledgeOptionsList from "./PledgeOptionsList";
import "../styles/PledgeOption.css";

export default function SelectionModal(props) {
	let {
		handleClick,
		setSelectedOption,
		setPledgeAmmount,
		setShowSuccessModal,
	} = props;
	return (
		<div class="background-overlay">
			<div class="modal left-aligned">
				<div class="modal-top">
					<h3>Back this project</h3>
					<a href="" class="close-button" onClick={handleClick}>
						<img
							src="./images/icon-close-modal.svg"
							alt="close-button"
						/>
					</a>
				</div>
				<p>
					Want to support us in bringing Mastercraft Bamboo Monitor
					Riser out in the world?
				</p>

				<PledgeOptionsList
					handleClick={handleClick}
					setShowSuccessModal={setShowSuccessModal}
					list={props.list}
					forSelectModal={true}
					setPledgeAmmount={setPledgeAmmount}
					setSelectedOption={setSelectedOption}
				/>
			</div>
		</div>
	);
}

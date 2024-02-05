import React from "react";
import "../styles/SuccessModal.css";

export default function SuccessModal(props) {
	const { setShowSuccessModal, handleClick } = props;
	return (
		<div className="background-overlay">
			<div class="modal small">
				<img
					src="./images/icon-check.svg"
					alt=""
					class="success-icon"
				/>
				<h3>Thanks for your support</h3>
				<p>
					Your pledge brings us one step closer to sharing Mastercraft
					Bamboo Monitor Riser worldwide. You will get an email once
					our campaign is completed
				</p>
				<button
					class="primary margin-top"
					onClick={(e) => {
						setShowSuccessModal(false);
						handleClick(e);
					}}
				>
					Got it
				</button>
			</div>
		</div>
	);
}

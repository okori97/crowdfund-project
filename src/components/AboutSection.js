import React from "react";
import PledgeOptionsList from "./PledgeOptionsList";

export default function AboutSection(props) {
	let { description, pledgeOptions, toggleModal, setPledgeAmmount } = props;
	return (
		<section class="modal left-aligned">
			<h3>About this project</h3>
			<p>{description}</p>
			{pledgeOptions.length > 0 && (
				<PledgeOptionsList
					list={pledgeOptions}
					handleClick={toggleModal}
					setPledgeAmmount={setPledgeAmmount}
				/>
			)}
		</section>
	);
}

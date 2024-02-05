import React, { useState } from "react";
import PledgeOption from "./PledgeOption";

export default function PledgeOptionsList(props) {
	let {
		list,
		setSelectedOption,
		forSelectModal,
		setPledgeAmmount,
		handleClick,
		setShowSuccessModal,
	} = props;
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log("yosssoo");
		for (let item of e.target) {
			if (item.type == "number") {
				console.log("it works");
				setPledgeAmmount(item.value);
				setShowSuccessModal(true);
			}
		}
	};

	return (
		<form onSubmit={onSubmit}>
			{list.map((item, index) => {
				return (
					<PledgeOption
						option={item}
						forSelectModal={forSelectModal == true ? true : false}
						handleClick={handleClick}
						value={index}
						selectedOptionIndex={selectedOptionIndex}
						setSelectedOptionIndex={setSelectedOptionIndex}
						setSelectedOption={setSelectedOption}
					/>
				);
			})}
		</form>
	);
}

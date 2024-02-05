import React from "react";
import "../styles/HeaderSection.css";

export default function HeaderSection(props) {
	let { toggleModal, isBookmarked, Title, subtitle, setIsBookmarked } = props;
	return (
		<section class="modal">
			<img
				src="./images/logo-mastercraft.svg"
				alt=""
				class="project-logo"
			/>
			<h1>{Title}</h1>
			<p>{subtitle}</p>

			<div class="flex-row">
				<button class="primary" onClick={toggleModal}>
					Back this Project
				</button>
				<button
					class={"bookmark" + (isBookmarked ? " bookmarked" : "")}
					onClick={() => {
						setIsBookmarked(!isBookmarked);
					}}
				>
					<img src="./images/icon-bookmark.svg" alt="" />
					<span>Bookmark</span>
				</button>
			</div>
		</section>
	);
}

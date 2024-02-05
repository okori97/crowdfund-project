import React from "react";
import "../styles/Header.css";

export default function Header(props) {
	const { setShowMobileNav, showMobileNav } = props;
	return (
		<section class="header">
			<div class="header-overlay"></div>
			<img
				src="./images/image-hero-desktop.jpg"
				alt=""
				class="header-image"
			/>

			<nav class="navbar">
				<a href="#">
					{" "}
					<img class="logo" src="./images/logo.svg" />
				</a>
				<div class="navbar-links">
					<a class="navbar-link"> About </a>
					<a class="navbar-link"> Discover</a>
					<a class="navbar-link"> Get Started </a>
				</div>
			</nav>

			{showMobileNav && (
				<nav
					class="hamburger-menu opened"
					onClick={() => setShowMobileNav(false)}
				>
					<div class="hamburger-menu-top">
						<a href="#">
							{" "}
							<img class="logo" src="./images/logo.svg" />
						</a>
						<a href="#">
							{" "}
							<img
								class="hamburger-close-icon"
								src="./images/icon-close-menu.svg"
							/>
						</a>
					</div>

					<div class="hamburger-menu-links">
						<a class="navbar-link"> About </a>
						<a class="navbar-link"> Discover</a>
						<a class="navbar-link"> Get Started </a>
					</div>
				</nav>
			)}

			{!showMobileNav && (
				<nav
					class="hamburger-menu"
					onClick={() => setShowMobileNav(true)}
				>
					<div class="hamburger-menu-top">
						<a href="#">
							{" "}
							<img class="logo" src="./images/logo.svg" />
						</a>
						<a href="#">
							{" "}
							<img
								class="hamburger-hamburger"
								src="./images/icon-hamburger.svg"
							/>
						</a>
					</div>
				</nav>
			)}
		</section>
	);
}

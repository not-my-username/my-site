"use client";

import { useEffect, useState } from "react";

// Title headding, and subheadding
export default function Title() {
	// useState for the cursor
	const [showElement, setShowElement] = useState(true);

	// useState for the subheadding of the title
	const [subHeaddingClasses, setSubHeaddngClasses] = useState("invisible");

	// useState for the CSS classes on the "New" tag
	const [newTagClasses, setNewTagClasses] = useState("invisible");

	// useState for the title text
	const [titleText, setTitleText] = useState("");

	// useState for the cursor flashing animation
	const [cursorFlash, setCursorFlash] = useState(true);

	// Types the text
	function type(text) {
		setCursorFlash(false);
		var typedText = "";
		var i = 0;

		var interval = setInterval(() => {
			typedText = typedText + text[i];
			setTitleText(typedText);

			if (i == text.length - 1) {
				clearInterval(interval);
				setCursorFlash(true);
				setTimeout(() => {
					setSubHeaddngClasses(
						"text-gray-200 animate-fade-right animate-ease-out"
					);
				}, 500);

				setTimeout(() => {
					setNewTagClasses("animate-fade-right animate-ease-out");
				}, 600);
			}
			i++;
		}, 80);
	}

	// useEffect to hide the cursor once the user scrolls down
	useEffect(() => {
		const handleScroll = () => {
			const position =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;

			if (position > 400) {
				setShowElement(false);
				window.removeEventListener("scroll", handleScroll);

				setSubHeaddngClasses(
					"text-gray-200 animate-fade-right animate-ease-out"
				);
				setNewTagClasses("animate-fade-right animate-ease-out");
			}
		};

		window.addEventListener("scroll", handleScroll);
	}, []);

	// useEffect to start the typing animation after 1 second
	useEffect(() => {
		const orignalText = "Hi there!     I'm Liam";

		setTimeout(() => {
			type(orignalText);
		}, 1000);
	}, []);

	// Page
	return (
		<div class="text-center h-screen flex" id="title">
			<div class="py-8 px-4 m-auto max-w-screen-xl text-left lg:py-16 z-10 relative">
				<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white inline-block transition-all glow">
					{titleText}
				</h1>
				{showElement && (
					<p
						className={
							"mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white inline-block " +
							(cursorFlash ? "flash" : "")
						}>
						|
					</p>
				)}
				<p
					class={
						"mb-8 text-lg font-normal lg:text-xl " +
						subHeaddingClasses
					}>
					And I'm a student who's passionate about Audio Visual,
					programming, and Godot.{" "}
				</p>
				<a
					href="https://github.com/not-my-username/SiImpactControl"
					class={
						"inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 shadow-lg shadow-blue-900/50 hover:shadow-blue-800/50 transition " +
						newTagClasses
					}>
					<span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
						New
					</span>{" "}
					<span class="text-sm font-medium">
						SiImpactControl software
					</span>
					<svg
						aria-hidden="true"
						class="ml-2 w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	);
}

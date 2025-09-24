import { useState } from "react";
import TitleInfo from "../data/TitleInfo.json";
import TypeEffect from "./TypeEffect";

// Title headding, and subheadding
export default function Title() {

	// useState for the subheadding of the title
	const [subHeaddingClasses, setSubHeaddngClasses] = useState("invisible");

	// useState for the CSS classes on the "New" tag
	const [newTagClasses, setNewTagClasses] = useState("invisible");

	return (
		<div class="text-center h-screen flex" id="title">
			<div class="py-8 px-4 m-auto max-w-screen-xl text-left lg:py-16 z-10 relative">
				<TypeEffect
					text={TitleInfo.title}
					onComplete={() => {
						setTimeout(() => {
							setSubHeaddngClasses(
								"text-gray-200 animate-fade-right animate-ease-out"
							);
						}, 300);

						setTimeout(() => {
							setNewTagClasses(
								"animate-fade-right animate-ease-out"
							);
						}, 400);
					}}>
					<span
						class={
							subHeaddingClasses +
							" text-xs lg:text-lg text-gray-300 font-normal"
						}>
						{TitleInfo.pronouns}
					</span>
				</TypeEffect>

				<p
					class={
						"mb-4 text-sm font-normal lg:text-xl " +
						subHeaddingClasses
					}>
					{TitleInfo.subheadding}
				</p>
				<a
					href={TitleInfo.new_link}
					class={
						"inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 shadow-lg shadow-blue-900/50 hover:shadow-blue-800/50 transition " +
						newTagClasses
					}>
					<span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
						New
					</span>
					<span class="text-sm font-medium">
						{TitleInfo.new_text}
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

"use client";

import { SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE } from "next/dist/next-devtools/userspace/app/segment-explorer-node";
import { useEffect, useState } from "react";

// Typing effect + heading
export default function TypeEffect({ text, delay = 1500, speed = 60, hideCursor = true, children, onComplete }) {
    const [cursorClass, setCursorClass] = useState("flash");
	const [titleText, setTitleText] = useState("");

	function type(text) {
		setCursorClass("false");
		let typedText = "";
		let i = 0;

		const interval = setInterval(() => {
			typedText += text[i];
			setTitleText(typedText);

			if (i === text.length - 1) {
				clearInterval(interval);

				if (hideCursor) {
					setCursorClass("opacity-0");
				} else {
					setCursorClass("flash")
				}
            
                // Call the callback if provided
				if (typeof onComplete === "function") {
					onComplete();
				}
			}
			i++;
		}, speed);
	}

	useEffect(() => {
		const timeout = setTimeout(() => type(text), delay);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white inline-flex items-end transition-all glow">
			{titleText}

			<span
				className={
					"mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white inline-block transition-opacity duration-500 " +
					cursorClass
				}>
				|
			</span>
            {children}
		</h1>
	);
}

"use client";

import { useEffect, useRef } from "react";

export default function NavLink({ id, href, text }) {
	const linkRef = useRef(null);
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&";

	useEffect(() => {
		const element = linkRef.current;
		if (!element) return;

		function regen() {
			let iteration = 0;
			const value = element.getAttribute("data-value");
			const interval = setInterval(() => {
				element.innerText = element.innerText
					.split("")
					.map((letter, index) =>
						index < iteration
							? value[index]
							: letters[
									Math.floor(Math.random() * letters.length)
								],
					)
					.join("");
				iteration += 1 / 3;
				if (iteration >= value.length) clearInterval(interval);
			}, 30);
		}

		element.addEventListener("mouseenter", regen);
		return () => element.removeEventListener("mouseenter", regen);
	}, []);

	return (
		<a
			ref={linkRef}
			id={id}
			href={href}
			data-value={text}
			className="block p-3 m-0 text-center text-white rounded font-mono hover:text-blue-600"
		>
			{text}
		</a>
	);
}

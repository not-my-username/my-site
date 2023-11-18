"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/navbar"
import Title from "./components/title"
import MyWork from "./components/myWork"

export default function Home() {

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
			const bgOffset = scrollPosition / 8; // Adjust the scroll speed here

			document.querySelector('.grid-bg').style.backgroundPositionY = -bgOffset + 'px';
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);



	return (
		<>
			<div className="grid-bg bg-zinc-900 "></div>
			<main className="dark">
				<Navbar></Navbar>
				<Title></Title>
				<MyWork></MyWork>
				
				<div class=" h-80"></div>

				<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-gradient-to-t from-zinc-900 h-32 pointer-events-none">
				</footer>

				

				<script src="/flowbite.min.js"></script>
			</main>
		</>


	)
}

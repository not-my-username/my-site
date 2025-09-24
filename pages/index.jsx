import Navbar from "@/components/NavBar";
import Title from "@/components/Title";
import MyWork from "@/components/MyWork";
import ScrollGridBG from "@/components/GridScrollBG";

export default function Home() {
	return (
		<>
			<ScrollGridBG/>
			<main className="dark">
				<Navbar></Navbar>
				<Title></Title>
				<MyWork></MyWork>

				<div class="h-80"></div>
				<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-gradient-to-t from-zinc-900 h-32 pointer-events-none"></footer>
			</main>
		</>
	);
}

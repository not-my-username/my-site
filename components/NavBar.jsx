import NavLink from "./NavLink";
import navLinks from "../data/NavLinks.json";

export default function Navbar() {
	return (
		<nav className="fixed w-full z-20 top-0 left-0 h-24 pointer-events-none bg-gradient-to-b from-zinc-900">
			<div className="flex items-center justify-center w-full h-full pointer-events-auto">
				<div className="flex items-center justify-center w-full">
					<ul className="flex space-x-8 px-4 font-medium backdrop-blur rounded-2xl">
						{navLinks.map((link) => (
							<li key={link.id}>
								<NavLink {...link} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

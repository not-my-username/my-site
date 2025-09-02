import NavLink from "./NavLink";
import navLinks from "../../data/NavLinks.json";

export default function Navbar() {
	return (
		<nav className="fixed w-full z-20 top-0 left-0 h-24 pointer-events-none bg-gradient-to-b from-zinc-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 pointer-events-auto">
				<div className="flex md:order-2 rounded backdrop-blur">
					<button
						data-collapse-toggle="navbar-cta"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden bg-transparent backdrop-blur focus:outline-none focus:ring-2 focus:ring-gray-600"
						aria-controls="navbar-cta"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6 text-white"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>

				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-cta"
				>
					<ul className="flex flex-col font-medium px-5 mt-4 rounded-2xl md:flex-row md:space-x-8 md:mt-0 md:border-0 backdrop-blur">
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

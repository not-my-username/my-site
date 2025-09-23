import workItems from "../../data/MyWork.json";

export default function MyWork() {
	return (
		<section className="m-auto max-w-4xl" id="my-work">
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div className="max-w-screen-md mb-8 lg:mb-16">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						My Work
					</h2>
				</div>

				<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
					{workItems.map((item, index) => (
						<a
							key={index}
							className="m-3 p-5 rounded-2xl border-2 border-zinc-800 backdrop-blur-xs"
							href={item.url}
						>
							<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
								<span className="material-symbols-outlined">
									{item.icon}
								</span>
							</div>
							<h3 className="mb-2 text-xl font-bold dark:text-white">
								{item.title}
							</h3>
							<p className="text-gray-500 dark:text-gray-400">
								{item.description}
							</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

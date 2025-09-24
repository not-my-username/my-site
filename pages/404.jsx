import ScrollGridBG from "@/components/GridScrollBG";
import TypeEffect from "@/components/TypeEffect";

export default function Custom404() {
	return (
		<>
			<ScrollGridBG />
			<div class="text-center h-screen flex" id="title">
				<div class="py-8 px-4 m-auto max-w-screen-xl text-left lg:py-16 z-10 relative">
					<TypeEffect text={"404"} delay={1000} speed={100} hideCursor={false}/>
				</div>
			</div>
		</>
	);
}

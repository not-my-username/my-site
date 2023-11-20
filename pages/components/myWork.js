"use client"

export default function MyWork() {
    return (
        <section class=" m-auto max-w-4xl" id="my-work">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Work</h2>
                    {/* <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here is a list of all the things I have made</p> */}
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <a class="bg-zinc-900 m-3" href="https://spectrum.liamsherwin.tech">
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                            <span class="material-symbols-outlined">
                                lightbulb
                            </span>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Spectrum</h3>
                        <p class="text-gray-500 dark:text-gray-400">Spectrum is a program to visulise music using stage lights for live shows, done in realtime</p>
                    </a>
                    <a class=" bg-zinc-900 m-3" href="https://rtt.liamsherwin.tech">
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                            <span class="material-symbols-outlined">
                                timer
                            </span>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Reaction Time Test</h3>
                        <p class="text-gray-500 dark:text-gray-400">A very very simple website to test your reaction time</p>
                    </a>
                    <a class=" bg-zinc-900 m-3" href="https://binary.liamsherwin.tech">
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                            <span class="material-symbols-outlined">
                                timer_10
                            </span>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Learn Binary</h3>
                        <p class="text-gray-500 dark:text-gray-400">A very very simple website to test your binary to decimal skills</p>
                    </a>
                </div>
            </div>
        </section>
    )
}
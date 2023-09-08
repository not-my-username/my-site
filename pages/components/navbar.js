"use client"

import { useEffect } from "react";

export default function Navbar(user, current_page) {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&";

    

    useEffect(() => {
        
        function regen(element) {
            let iteration = 0;
            let interval = null;
            clearInterval(interval);
    
            interval = setInterval(() => {
                element.innerText = element.innerText.split("").map((letter, index) => {
                    if (index < iteration) {
                        return element.getAttribute("value")[index];
                    }
                        return letters[Math.floor(Math.random() * 56)]
                    }).join("");
    
                if (iteration >= element.getAttribute("value").length) {
                    clearInterval(interval);
                }
    
                iteration += 1 / 3;
            }, 30);
        }
        const handleHover = (event) => {
            regen(event.target)
        };
        document.getElementById("home-button").addEventListener("mouseenter", handleHover);
        document.getElementById("about-button").addEventListener("mouseenter", handleHover);
        document.getElementById("contact-button").addEventListener("mouseenter", handleHover);
    }, []);

    return (
        <nav class="bg-gradient-to-b from-zinc-900 fixed w-full z-20 top-0 left-0 h-32 pointer-events-none">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4  pointer-events-auto">

                <div class="flex md:order-2">
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-1 px-5 mt-4 border border-gray-100 rounded-2xl bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-zinc-900 dark:border-gray-700 ">
                        <li>
                            <a href="/" class="block py-2 pl-3 pr-4 w-20 text-center text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-mono" aria-current="page" id="home-button" value="Home">Home</a>
                        </li>
                        <li>
                            <a href="/about" class="block py-2 pl-3 pr-4 w-20 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-mono" id="about-button" value="About">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 w-20 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-mono" id="contact-button" value="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
"use client";

import { useEffect } from "react";

export default function Navbar({ user, current_page }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&";

  useEffect(() => {
    let intervals = [];

    function regen(element) {
      let iteration = 0;
      const value = element.getAttribute("value");
      const interval = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => (index < iteration ? value[index] : letters[Math.floor(Math.random() * letters.length)]))
          .join("");

        iteration += 1 / 3;

        if (iteration >= value.length) {
          clearInterval(interval);
        }
      }, 30);

      intervals.push(interval);
    }

    const handleHover = (event) => regen(event.target);

    const homeButton = document.getElementById("home-button");
    const aboutButton = document.getElementById("about-button");

    homeButton?.addEventListener("mouseenter", handleHover);
    aboutButton?.addEventListener("mouseenter", handleHover);

    return () => {
      homeButton?.removeEventListener("mouseenter", handleHover);
      aboutButton?.removeEventListener("mouseenter", handleHover);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-b from-zinc-900 fixed w-full z-20 top-0 left-0 h-32 pointer-events-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 pointer-events-auto">
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-1 px-5 mt-4 rounded-2xl md:flex-row md:space-x-8 md:mt-0 md:border-0 backdrop-blur">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 w-20 text-center text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-mono"
                aria-current="page"
                id="home-button"
                value="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#my-work"
                className="block py-2 pl-3 pr-4 w-20 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-mono"
                id="about-button"
                value="My Work"
              >
                My Work
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


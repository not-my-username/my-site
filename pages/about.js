"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/navbar"

export default function About() {

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
    <div className="grid-bg bg-zinc-900"></div>
    <main className="dark">
      {Navbar()}
      <div class="text-center mt-64">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 id="title" class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white inline-block transition-all glow">About Me</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">And I'm a student who's passionate about programming, filmmaking, and VFX. </p>

          <a href="https://binary.liamsherwin.tech" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 shadow-lg shadow-blue-900/50 hover:shadow-blue-800/50 transition">
            <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Learn binary site! Check it out</span>
            <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>

     

      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-gradient-to-t from-zinc-900 h-32 passthrough">
      </footer>

      <script src="/flowbite.min.js"></script>
    </main>
    </>


  )
}

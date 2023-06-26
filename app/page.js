"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/navbar"

export default function Home() {

  const [showElement, setShowElement] = useState(true);

  function type(text, element) {
    document.getElementById("cursor").classList.remove("flash")
    var typedText = ""
    var i = 0
    var interval = setInterval(() => {
      typedText = typedText + text[i]
      element.innerText = typedText
      if (i == text.length -1) {
        clearInterval(interval)
        document.getElementById("cursor").classList.add("flash")
        // setTimeout(() => {document.getElementById("cursor").style.color = "#00000000"}, 1500)
      }
      i++
    }, 80)
  }

  useEffect(() => {
    var title = document.getElementById('title');
    const orignalText = "Hi there!        I'm Liam"
    setTimeout(() => {type(orignalText, title)}, 1000)
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(position > 400) {
        setShowElement(false)
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

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
    <main className=" ">
      {Navbar()}
      <div class="text-center mt-64">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 id="title" class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white inline-block transition-all glow"></h1> {showElement && <p id="cursor" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white flash inline-block">|</p>}
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">And I'm a student who's passionate about programming, filmmaking, and VFX. </p>

          <a href="https://binary.liamsherwin.tech" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 shadow-lg shadow-blue-900/50 hover:shadow-blue-800/50 transition">
            <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Learn binary site! Check it out</span>
            <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>

      <div className="w-full pt-60 text-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl dark:text-white">Stuff I've Made</h1>
        <br></br>
        <div className="flex justify-center ">
          <div class="inline-flex rounded-md shadow-sm">
            <a href="https://binary.liamsherwin.tech" class="px-6 py-4 w-50 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              Learn Binary
            </a>
            <a href="https://rtt.liamsherwin.tech" class="px-6 py-4 w-50 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              Reaction Time Test
            </a>
            <a href="https://mesh.liamsherwin.tech" class="px-6 py-4 w-50 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              Mesh Network Sim
            </a>
          </div>
        </div>
        <br></br>
        <br></br>
        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ">
          See It all!
          <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>

      <div className="w-full bg-zinc-800 my-20 h-60">

      </div>


      <ol class="relative border-l border-gray-200 dark:border-gray-700 ml-52 w-1/3">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2020</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Made my first website</h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">During the 2020 lockdown, my dad gave me an HTML programming book. After devouring its contents for weeks, I created my first website. It ran locally on our home network, made up of simple HTML files.</p>
          <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </li>
        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </li>
      </ol>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-gradient-to-t from-zinc-900 h-32 passthrough">
      </footer>

      <script src="/flowbite.min.js"></script>
    </main>
    </>


  )
}

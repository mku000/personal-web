import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'
import { MdMail } from 'react-icons/md'

const Landing = () => {
  return (
    <body className="p-6 antialiased bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
  <div className="max-w-5xl mx-auto">
    <header role="banner" className="relative grid grid-cols-3 md:gap-2" data-astro-transition-scope="astro-l7r54iwe-1">
    
      <div>
        <a id="logo" href="/" title="About" className="font-serif text-4xl leading-[1.1em] text-right [writing-mode:vertical-rl] rotate-180" data-astro-transition-persist="astro-n5gwkkpg-2">
          <h1>Muhammad<br />Khaerul </h1>
        </a>
      </div>
      <nav className="col-span-2">
        <ul className="grid grid-cols-3 gap-2">
          <li className="">
            <a aria-current="page" href="/" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top underline decoration-[1.5px] underline-offset-4 hover:underline p-6 -mt-6 -ml-6"> About </a>
          </li>
          <li className="">
            <Link to="/shelf" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top hover:underline decoration-[1.5px] underline-offset-4 p-6 -mt-6 -ml-6"> Shelf </Link>
          </li>

          <li className="">
            <Link to="/rnd" className="uppercase text-sm tracking-widest leading-none font-medium inline-block align-top hover:underline decoration-[1.5px] underline-offset-4 p-6 -mt-6 -ml-6"> R&D </Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="mt-9 md:grid md:grid-cols-12 md:gap-2" id="main">
      <div className="grid grid-cols-3 md:col-span-4 md:col-start-9">
        <img src="https://avatars.githubusercontent.com/u/115051244?s=400&u=657dc247179439c9298f57c311cf57ce5673ce6b&v=4" className="col-span-2 col-start-2 mb-8 md:col-span-3 md:col-start-1 md:mb-12 md:-mt-[3.75rem] dark:brightness-[.88]" alt="Muhammad Khaerul Umam" width="1340" height="2010" loading="lazy" decoding="async" />
      </div>
      <main className="md:col-span-7">
        <h2 className="text-2xl font-medium">Hai!</h2>
        <section className="prose mt-3">
          <p>
            I’m Muhammad Khaerul Umam, a Software Engineer & Systems Integrator from Indonesia, living in Brebes, Central Java.
          </p>
          <p>
            Currently working as a Software Engineer at <a href="https://ptsumber.com/" title="PT. Sumber Masanda Jaya" target="_blank" rel="noreferrer">PT. Sumber Masanda Jaya</a>, focusing on enterprise footwear manufacturing systems, MES/ERP integration, and industrial floor operations.
          </p>
          <p>
            With over 6 years of software engineering experience under my belt, I specialize in building robust multi-platform systems (Web, Android, and Desktop), high-volume notification dispatchers, and enterprise <a href="https://www.microsoft.com/en-us/sql-server" title="SQL Server" target="_blank" rel="noreferrer">SQL Server</a> database architecture. I bridge legacy industrial applications (VB6/VB.NET) with modern web ecosystems using <a href="https://react.dev/" title="ReactJS" target="_blank" rel="noreferrer">ReactJS</a>, <a href="https://nodejs.org/" title="Node.js" target="_blank" rel="noreferrer">Node.js</a>, and <a href="https://ionicframework.com/" title="Ionic Framework" target="_blank" rel="noreferrer">Ionic Framework</a>.
          </p>
        </section>
        <section className="prose mt-6"> 
          <p>
            Have a good one.
          </p>  
        </section>
      </main>
      <aside className="flex flex-col gap-8 mt-8 md:mt-0 md:col-span-4 md:col-start-9">
      <div className="">
          <h2 className="text-2xl font-medium lg:mb-3"> PT. Sumber Masanda Jaya </h2>
          <ul>
            <li className="flex gap-3 items-center tabular-nums justify-between">
              <div className="flex flex-1">
                <hr className="bt-1 border-neutral-300 dark:border-neutral-700 basis-5/12" />
              </div>
              <div> Present </div>
            </li>
            <li className="flex gap-3 items-center tabular-nums justify-between"> Software Engineer <hr className="bt-1 border-neutral-300 dark:border-neutral-700 flex-1" /> 2024 </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-2xl font-medium lg:mb-3"> Alcott SMG </h2>
          <ul>
            <li className="flex gap-3 items-center tabular-nums justify-between">
              <div className="flex flex-1">
                <hr className="bt-1 border-neutral-300 dark:border-neutral-700 basis-5/12" />
              </div>
              <div> 2024 </div>
            </li>
            <li className="flex gap-3 items-center tabular-nums justify-between">
              <div className="flex flex-1">
                <hr className="bt-1 border-neutral-300 dark:border-neutral-700 basis-full" />
              </div>
              <div> 2023 </div>
            </li>
            <li className="flex gap-3 items-center tabular-nums justify-between"> Frontend Developer <hr className="bt-1 border-neutral-300 dark:border-neutral-700 flex-1" /> 2022 </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-2xl font-medium lg:mb-3"> Freelancer & Other Roles </h2>
          <ul>
            <li className="flex gap-3 items-center tabular-nums justify-between">
              <div className="flex flex-1">
                <hr className="bt-1 border-neutral-300 dark:border-neutral-700 basis-7/12" />
              </div>
              <div> 2021 </div>
            </li>
            <li className="flex gap-3 items-center tabular-nums justify-between"> Drivetest Engineer at Sinergi Aitikom <hr className="bt-1 border-neutral-300 dark:border-neutral-700 flex-1" /> 2020 </li>
            <li className="flex gap-3 items-center tabular-nums justify-between">
              <div className="flex flex-1">
                <hr className="bt-1 border-neutral-300 dark:border-neutral-700 basis-full" />
              </div>
              <div> 2019 </div>
            </li>
            <li className="flex gap-3 items-center tabular-nums justify-between">
              <div className="flex flex-1">
                <hr className="bt-1 border-neutral-300 dark:border-neutral-700 basis-full" />
              </div>
              <div> 2018 </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    <footer className="mt-12 text-neutral-400 dark:text-neutral-600">
    <p>
    </p>
  <p className='flex items-center gap-2 my-1'>
    <MdMail/>
  <a href="mailto:muhammed.khaerul.umam@gmail.com" target="_blank" rel="noreferrer" title='Send Email'>muhammed.khaerul.umam@gmail.com</a>    Brebes, Central Java.   
    </p>

      <p>
        Made with <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>, hosted on <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>.
      </p>
    </footer>
  </div>
</body>
  )
}

export default Landing
import React from 'react';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';

const projects = [
    {
      title: "Drainage Monitoring IoT",
      description: "Drainage Monitoring IoT App provides a dashboard to monitor smart sensors installed in gully drainage and soakaways. The dashboard displays gully locations on a map, making it easier for technicians to identify and address issues or perform maintenance. This app was built using ReactJS.",
      imageUrl: "https://res.cloudinary.com/dyhunlqi0/image/upload/v1717207712/UMAMPORTFOLIO/smartdrainage_gupoga.png",
      type:"Company Project",
      url: "https://www.gullytech.io/"
    },
    {
      title: "Works Space Booking Systems",
      description: "This app helps companies keep track of tasks and expenses for their employees. It's also a booking system for workspaces, with features to calculate carbon savings. We made versions for iOS and Android, and a dashboard for managing bookings. We also included maps and charts for data visualization. The app was built with Ionic for mobile and ReactJS for the web.",
      imageUrl: "https://res.cloudinary.com/dyhunlqi0/image/upload/v1717207712/UMAMPORTFOLIO/martdesk_wbcu8k.png",
      type:"Company Project",
      url: "#"
    },
    {
      title: "Work Tasks & Payroll Planner",
      description: "It serves as a bridge between a company and its employees, allowing monitoring of tasks and expenses via a dashboard. Additionally, it functions as an online booking platform for workspaces, offering features to calculate carbon savings. Versions for iOS and Android were developed, alongside a dashboard for managing bookings. The project was built using Ionic for mobile and ReactJS for the web.",
      imageUrl: "https://res.cloudinary.com/dyhunlqi0/image/upload/v1717207711/UMAMPORTFOLIO/aa_nw9eiv.png",
      type:"Company Project",
      url: "#"
    },
    {
      title: "Mulberry & Ash",
      description: "This website serves as both a company profile and a platform for booking consultations, built using Shopify. With its attractive design and seamless booking functionality, customers can easily schedule consultations with the company.",
      imageUrl: "https://res.cloudinary.com/dyhunlqi0/image/upload/v1717207713/UMAMPORTFOLIO/mulberryash_kg1cvb.png",
      type:"Company Project",
      url: "https://mulberryash.com/ "
    },
    {
      title: "PPMTQNI",
      description: "The school website offers online registration and an e-book reader feature, all developed using ReactJS. With its user-friendly interface, prospective students can easily apply online, while current students can access digital resources conveniently through the e-book reader.",
      imageUrl: "https://res.cloudinary.com/dyhunlqi0/image/upload/v1716946342/UMAMPORTFOLIO/dppmtqni_etfiok.png",
      type:"Freelance",
      url: "https://ppmtqni-brebes.ponpes.id"
    },
    {
      title: "Maestro Garden",
      description: "Company profiles that offer informative and detailed descriptions of various products make it easier for buyers to explore catalogs and make informed decisions based on their needs.",
      imageUrl: "https://res.cloudinary.com/dyhunlqi0/image/upload/v1716948687/UMAMPORTFOLIO/maestroo_ixlcos.png",
      type:"Freelance",
      url: "https://maestrogarden75plg.co.id/"
    },
    // Add more projects here as needed
  ];
  

const Shelf = () => {
    return (
        <div className="relative font-sans selection:bg-blue-100 selection:text-blue-500 bg-light-neutral dark:text-white dark:bg-black dark:selection:bg-blue-900 dark:selection:text-blue-400">
            <div className="flex lg:flex-col flex-col-reverse">
                <nav className="sticky lg:top-0 lg:bottom-auto lg:border-t-transparent lg:border-l-transparent lg:border-r-transparent lg:border-b border border-neutral-100 lg:border-b-neutral-100 bg-white z-[51] top-auto bottom-8 mb-8 w-full lg:max-w-none max-w-[90%] mx-auto rounded lg:rounded-none shadow-xl shadow-black/5 lg:shadow-none dark:bg-neutral-950 dark:lg:border-b-neutral-900 dark:border-neutral-900">
                    <div className="w-full flex lg:grid lg:grid-cols-5  items-center justify-between max-w-screen-3xl mx-auto md:px-10 min-[650px]:px-5 min-[400px]:px-3.5 px-5 ">
                        <div className="items-center flex-shrink-0 mr-6 md:flex py-2">
                            <div className="group/all -ml-1 cursor-pointer">
                                <p className="text-lg font-medium group-hover/all:text-neutral-500 transition-colors relative dark:group-hover/all:text-neutral-400">
                                    <span className="group relative">M — K — U</span>
                                    <span className="text-base font-normal text-neutral-500 group-hover/all:text-neutral-400 ml-2 transition-colors xl:inline-block dark:group-hover/all:text-neutral-600">SHELF</span>
                                    <Link to="/" className=''>
                                        <MdOutlineKeyboardBackspace className="mt-1 text-gray-400 hover:text-gray-900" style={{ fontSize: "30px", fontWeight: "1000" }} title='back' />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className='w-full relative mx-auto md:px-10 px-6 min-h-screen pt-4 lg:pt-0'>
                    <div className="w-full">
                        <header className="w-full flex gap-4 flex-col lg:items-end lg:flex-row pb-4 md:mb-8">
                            <div className="lg:w-1/3 mb-4 md:mb-0 w-full flex flex-col-reverse xs:flex-row justify-between gap-4">
                                <h1 className="text-2xl line-clamp-3 text-neutral-400 selection:bg-blue-50 selection:text-blue-300 dark:text-neutral-500 dark:selection:bg-blue-950 dark:selection:text-blue-500 font-semibold leading-snug">
                                    Software Developer <br />
                                    <span className="text-black dark:text-white">Projects</span>
                                </h1>

                            </div>

                            <div className="w-1/3 hidden lg:block"></div>
                        </header>

                        <section className="w-full scroll-mt-24 mb-12" id="work">
                            <div className="flex flex-col gap-8 group/wrapper">
                            {projects.map((project, index) => (
                                <div key={index} className="w-full group/project mb-8 md:mb-0 lg:group-hover/wrapper:opacity-25 lg:hover:!opacity-100 transition-opacity">
                                    <a className="flex md:gap-0 gap-2 flex-col lg:flex lg:flex-row items-start relative group/link" href={project.url} target='_blank'>
                                        <div className="w-full lg:max-w-[calc((100%-432px)/2)] lg:sticky top-20 md:pr-8">
                                            <h3 className="text-lg font-semibold transition-colors md:group-hover/link:underline underline-offset-2">{project.title}</h3>
                                            <label>{project.type} —</label>
                                            <p className="text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-3 text-sm">{project.description}</p>
                                        </div>
                                        <div className="w-full relative">           
                                            <div className="bg-neutral-100 dark:bg-neutral-900/70 overflow-hidden lg:h-auto flex items-center justify-center w-full md:px-8">
                                                <img className="relative md:h-auto md:object-scale-down md:object-center object-cover object-left" src={project.imageUrl} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Shelf;

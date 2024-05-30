import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';

const Shelf = () => {
    return (
        <div className="relative font-sans selection:bg-blue-100 selection:text-blue-500 bg-light-neutral dark:text-white dark:bg-black dark:selection:bg-blue-900 dark:selection:text-blue-400">
            <div className="flex lg:flex-col flex-col-reverse">
                <nav className="sticky lg:top-0 lg:bottom-auto lg:border-t-transparent lg:border-l-transparent lg:border-r-transparent lg:border-b border border-neutral-200 lg:border-b-neutral-100 bg-white z-[51] top-auto bottom-8 mb-8 w-full lg:max-w-none max-w-[90%] mx-auto rounded-full lg:rounded-none shadow-xl shadow-black/5 lg:shadow-none dark:bg-neutral-950 dark:lg:border-b-neutral-900 dark:border-neutral-900">
                    <div className="w-full flex lg:grid lg:grid-cols-5 items-center justify-between max-w-screen-3xl mx-auto md:px-10 min-[650px]:px-5 min-[400px]:px-3.5 xs:px-3">
                        <div className="items-center flex-shrink-0 mr-6 hidden md:flex py-2">
                            <div className="group/all -ml-1 cursor-pointer">
                                <p className="text-lg font-medium group-hover/all:text-neutral-500 transition-colors relative dark:group-hover/all:text-neutral-400">
                                    <span className="group relative">M — K — U</span>
                                    <span className="text-base font-normal text-neutral-500 group-hover/all:text-neutral-400 ml-2 transition-colors hidden xl:inline-block dark:group-hover/all:text-neutral-600">SHELF</span>
                                    <a href="/" className=''>
                                        <MdOutlineKeyboardBackspace className="mt-1 text-gray-400 hover:text-gray-900" style={{ fontSize: "20px", fontWeight: "1000" }} title='back' />
                                    </a>
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
                                <div className="w-full group/project mb-8 md:mb-0 lg:group-hover/wrapper:opacity-25 lg:hover:!opacity-100 transition-opacity">
                                    <a className="flex md:gap-0 gap-2 flex-col lg:flex lg:flex-row items-start relative group/link" href="https://ppmtqni-brebes.ponpes.id" target='blank'>
                                        <div className="w-full lg:max-w-[calc((100%-432px)/2)] lg:sticky top-20 md:pr-8">
                                            <h3 className="text-lg font-semibold transition-colors md:group-hover/link:underline underline-offset-2">PPMTQNI</h3>
                                            <label>Freelance —</label>
                                            <p className="text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-2">Building an ecosystem for globalization.</p>
                                        </div>
                                        <div className="w-full relative">           
                                            <div className="bg-neutral-100 dark:bg-neutral-900/70 overflow-hidden lg:h-auto flex items-center justify-center w-full md:px-8">
                                                <img className="relative md:h-auto md:object-scale-down md:object-center object-cover object-left" src="https://res.cloudinary.com/dyhunlqi0/image/upload/v1716946342/UMAMPORTFOLIO/dppmtqni_etfiok.png" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full group/project mb-8 md:mb-0 lg:group-hover/wrapper:opacity-25 lg:hover:!opacity-100 transition-opacity">
                                    <a className="flex md:gap-0 gap-2 flex-col lg:flex lg:flex-row items-start relative group/link" href="https://maestrogarden75plg.co.id/" target='blank'>
                                        <div className="w-full lg:max-w-[calc((100%-432px)/2)] lg:sticky top-20 md:pr-8">
                                            <h3 className="text-lg font-semibold transition-colors md:group-hover/link:underline underline-offset-2">Maestro Garden</h3>
                                            <label>Freelance —</label>
                                            <p className="text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-2">A curated collection of the best products on the web.</p>
                                        </div>
                                        <div className="w-full relative">
                                            <div className="bg-neutral-100 dark:bg-neutral-900/70 overflow-hidden lg:h-auto flex items-center justify-center w-full md:px-8">
                                                <img className="relative md:h-auto md:object-scale-down md:object-center object-contain object-left" src="https://res.cloudinary.com/dyhunlqi0/image/upload/v1716948687/UMAMPORTFOLIO/maestroo_ixlcos.png" alt="maestro" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full group/project mb-8 md:mb-0 lg:group-hover/wrapper:opacity-25 lg:hover:!opacity-100 transition-opacity">
                                    <a className="flex md:gap-0 gap-2 flex-col lg:flex lg:flex-row items-start relative group/link" href="/work/bridge">
                                        <div className="w-full lg:max-w-[calc((100%-432px)/2)] lg:sticky top-20 md:pr-8">
                                            <h3 className="text-lg font-semibold transition-colors md:group-hover/link:underline underline-offset-2">Bridge</h3>
                                            <p className="text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-2">Browser based job page creator for Startups and SMEs.</p>
                                        </div>
                                        <div className="w-full relative">
                                            <div className="bg-neutral-100 dark:bg-neutral-900/70 overflow-hidden lg:h-auto flex items-center justify-center w-full md:px-8">
                                                <img className="relative md:h-auto md:object-scale-down md:object-center object-cover object-left" src="https://source.unsplash.com/800x600/?jobs" alt="Bridge" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full group/project mb-8 md:mb-0 lg:group-hover/wrapper:opacity-25 lg:hover:!opacity-100 transition-opacity">
                                    <a className="flex md:gap-0 gap-2 flex-col lg:flex lg:flex-row items-start relative group/link" href="/work/boost">
                                        <div className="w-full lg:max-w-[calc((100%-432px)/2)] lg:sticky top-20 md:pr-8">
                                            <h3 className="text-lg font-semibold transition-colors md:group-hover/link:underline underline-offset-2">Boost</h3>
                                            <p className="text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-2">Nutrition application & hardware device.</p>
                                        </div>
                                        <div className="w-full relative">
                                            <div className="bg-neutral-100 dark:bg-neutral-900/70 overflow-hidden lg:h-auto flex items-center justify-center w-full md:px-8">
                                                <img className="relative md:h-auto md:object-scale-down md:object-center object-cover object-left" src="https://source.unsplash.com/800x600/?nutrition" alt="Boost" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Shelf

import React from 'react'
import { AiFillEye } from "react-icons/ai"
import { Link } from 'react-router-dom'
import autohunt from "../Assets/Projects/autohunt ss.png"
import learnershut from "../Assets/Projects/learners hut ss.png"
import reviewer from "../Assets/Projects/review ss.png"
const Projects = () => {
    return (
        <section id='projects' className='mt-16'>
            <div className='flex flex-col md:flex-row justify-between px-4 md:px-24 items-center'>
                <div className="descption flex  flex-col justify-start md:pl-12">
                    <h1 className="text-2xl md:text-4xl font-semibold my-4 text-white">My Recent Works</h1>
                    <p className="text-lg text-base-100">Here i am showcasing some projects i have donr so</p>
                </div>
                <div className="mt-2 md:pr-8">
                    <Link class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Show more</Link>
                </div>
            </div>
            <section className="p-4 lg:p-24 ">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 ">
                        <a href="https://autohunt-f5b1c.web.app/" target="_blank" rel="noopener noreferrer">
                            <img src={autohunt} alt="" className="h-80 bg-blue-100 rounded-md lg:aspect-video mx-auto md:rounded-md" />
                        </a>
                        <div className="flex flex-col justify-center flex-1 p-6  text-white">
                            <span className="text-xs uppercase text-white">Last updated 04/12/22</span>
                            <h3 className="text-3xl font-bold">Autohunt resell car Marketplace</h3>
                            <p className="my-6 text-white">Its a common marketplace where people can buy and sell secondhand cars easily.Its a fully developed website
                                made with React,React query, Firebase,Tailwind,Express js, mongo DB, Node js.
                            </p>
                            <div className="flex space-x-7  place-items-start">
                                <a target="_blank" href='https://autohunt-f5b1c.web.app/' rel="noreferrer"><AiFillEye className="text-2xl" /></a>

                                <Link to="/projects/01" className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Show details</Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200">
                        <a href="https://learners-hut.web.app/" target="_blank" rel="noopener noreferrer">
                            <img src={learnershut} alt="" className="h-80 bg-blue-100 rounded-md lg:aspect-video mx-auto md:rounded-md" />
                        </a>
                        <div className="flex flex-col justify-center flex-1 p-6  text-white">
                            <span className="text-xs uppercase text-white">Join, it's free</span>
                            <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                            <p className="my-6 text-white">This is a online e-learning platform where people can buy their preferd courses based on on differenr category.This website is build with React,firebase,express js,json,node js,react router</p>

                            <div className="flex space-x-7  place-items-end">
                                <a target="_blank" href='https://github.com/Ashikur540/Learners-Hut-Client' className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300" rel="noreferrer">Client side</a>

                                <a target="_blank" href='https://github.com/Ashikur540/Learners-Hut-server' class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300" rel="noreferrer">Server side</a>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200">

                        <a href="https://ashikur-photographer.web.app/" target="_blank" rel="noopener noreferrer">
                            <img src={reviewer} alt="" className="h-80 bg-blue-100 rounded-md lg:aspect-video mx-auto md:rounded-md" />
                        </a>
                        <div className="flex flex-col justify-center flex-1 p-6  text-white">
                            <span className="text-xs uppercase text-white">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Photograpoher reviweing website</h3>
                            <p className="my-6 text-white">This is a simple website where users can give review and also edit and delete their review.This website is
                                build react, firebse,node js,mongo db,express js.</p>

                            <div className="flex space-x-7  place-items-end">
                                <a target="_blank" href='https://github.com/Ashikur540/Ashikur-Photographer-Client' className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300" rel="noreferrer">Client side</a>

                                <a target="_blank" href='https://github.com/Ashikur540/Ashikur-Photographer-Server' class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300" rel="noreferrer">Server side</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Projects
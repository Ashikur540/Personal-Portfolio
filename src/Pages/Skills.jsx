import React from 'react';
import { VscCode, VscDatabase } from "react-icons/vsc";
import bootstrap from '../Assets/Logos/bootstrap-5-1.svg';
import css from '../Assets/Logos/css-3-svgrepo-com.svg';
import expressjs from '../Assets/Logos/express-js-icon.svg';
import figma from '../Assets/Logos/figma-svgrepo-com.svg';
import firebase from '../Assets/Logos/firebase-svgrepo-com.svg';
import html from '../Assets/Logos/html-svgrepo-com.svg';
import mongodb from '../Assets/Logos/mongodb-svgrepo-com.svg';
import netlify from '../Assets/Logos/netlify.svg';
import nodejs from '../Assets/Logos/node-svgrepo-com.svg';
import react from '../Assets/Logos/react-1-logo-svgrepo-com.svg';
import tailwindcss from '../Assets/Logos/tailwind-css-2.svg';
import vercel from '../Assets/Logos/vercel.svg';
const Skills = () => {
    return (
        <section id='skills' className="mt-10 bg-primary min-h-full">
            <h1 className="text-2xl md:text-4xl font-semibold text-center my-8 text-white">My Skills</h1>
            <div className="container mx-auto  grid md:gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2 px-10  md:px-16 lg:px-24">
                <div className="frontEnd w-full  mx-auto">
                    <div className="skill-rype flex justify-center items-center gap-x-3 pt-2 pb-8">
                        <VscCode className='text-xl' />
                        <h4 className="text-xl text-center font-medium ">Frontend</h4>
                    </div>

                    <div className="grid  grid-cols-3   p-2 gap-5 pb-6">
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={html} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">HTML</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={css} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">CSS</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={react} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">React</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={figma} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Figma</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={tailwindcss} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Javacript</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={bootstrap} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Javacript</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <div className="backend ">Back-end</div> */}
                <div className="backEnd w-full mx-auto ">
                    <div className="skill-type flex justify-center items-center gap-x-3 pt-2 pb-8">
                        <VscDatabase className='text-xl' />
                        <h4 className="text-xl text-center font-medium">Backend</h4>
                    </div>

                    <div className="grid  grid-cols-3   p-2 gap-5 ">
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={nodejs} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Node js</h4>
                                <h4 className="text-md">Intermediate</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={expressjs} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Express js</h4>
                                <h4 className="text-md">Intermediate</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={mongodb} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Mongo Db</h4>
                                <h4 className="text-md">Intermediate</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={firebase} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Firebase</h4>
                                <h4 className="text-md">Intermediate</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={netlify} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Netlify</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>
                        <div className="skill-box flex flex-col justify-center items-center p-2 ">
                            <div className="skill-blob bg-slate-300 h-20 w-14  rounded-full flex items-center justify-center">
                                <img src={vercel} alt="figma" className="w-1/2 hover:-translate-y-1 hover:duration-150" />
                            </div>
                            <div className="skill-info text-center mt-1">
                                <h4 className="text-lg font-medium">Vercel</h4>
                                <h4 className="text-md">Advanced</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
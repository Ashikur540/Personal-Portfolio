import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import img from '../Assets/Image/IMG.jpg';
const Header = () => {
    return (
        <header class="bg-primary ">

            <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[auto] lg:py-16 lg:flex-row lg:items-center">
                <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                        <a class="w-8 h-8 mx-2  rounded-full lg:mx-0 focus:outline-none" href='/'><FaGithub className="w-full h-full text-sky-50" /></a>
                        <a class="w-8 h-8 mx-2  rounded-full lg:mx-0 focus:outline-none" href='/'><FaFacebook className="w-full h-full text-sky-500" /></a>
                        <a class="w-8 h-8 mx-2  rounded-full lg:mx-0 focus:outline-none" href='/'><FaWhatsapp className="w-full h-full text-teal-600" /></a>
                        <a class="w-8 h-8 mx-2  rounded-full lg:mx-0 focus:outline-none" href='/'><FaLinkedin className="w-full h-full text-sky-400" /></a>

                    </div>

                    <div class="max-w-3xl text-center md:text-left  lg:mx-12 lg:order-2">
                        <h1 class="text-4xl  font-semibold tracking-wide  text-white md:text-[4.5rem] md:leading-[4.5rem] lg:text-[5rem] lg:leading-[6rem]">Ashik <br />
                            MERN Stack <br />
                            Developer
                        </h1>
                        <p class="mt-4  dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <div class="mt-6">
                            <a href="https://drive.google.com/file/d/1LAZtQboKcl-DxAY9H7FcVFfmLopsmBEx/view?usp=share_link" class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-accent rounded-lg hover:bg-yellow-700 lg:mx-0 lg:w-auto focus:outline-none">Download Resume</a>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full h-[300px]  md:h-[380px]  lg:h-[580px] lg:w-1/2">
                    <img class="object-cover  mt-8 w-auto h-full max-w-2xl rounded-md" src={img} alt="" />
                </div>
            </div>
        </header >
    )
}

export default Header
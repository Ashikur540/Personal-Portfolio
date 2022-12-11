import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaInbox, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wfmn7ox', 'template_x664t03', form.current, '6LBNRAfgLio7maxh8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <section className="py-6 ">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt />
                                <span>Ashulia, Dhaka City</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaPhoneAlt />
                                <span>01790465884</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaInbox />
                                <span>meashik1000@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-4">Full name</span>
                            <input type="text" placeholder="Type here" className="block bg-secondary input input-bordered w-full max-w-xs" name="user_name" />
                        </label>
                        <label className="block">
                            <span className="mb-4">Email address</span>
                            <input type="email" placeholder="Type here" className="block bg-secondary input input-bordered w-full max-w-xs" name="user_email" />
                        </label>
                        <label className="block">
                            <span className="mb-4">Message</span>
                            <textarea className="block bg-secondary w-full h-284 textarea textarea-bordered" placeholder="your query" name="message"></textarea>
                        </label>
                        <button type="button" className=" self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400" value="Send">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
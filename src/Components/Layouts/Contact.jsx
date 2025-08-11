import React, { useRef, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dvl1a25', 'template_fbz4f31', form.current, {
                publicKey: 'eBBXRbPe0Nbo-4l5a',
            })
            .then(
                () => {
                    setSubmitted(true);
                    form.current.reset();
                    setTimeout(() => setSubmitted(false), 4000);
                },
                (error) => {
                    alert("Message sending failed. Please try again.");
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="bg-gray-100 py-20 px-6">

            <h1 className='text-center text-7xl font-bold mb-10'>Get in Touch</h1>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

               
                {/* Left Side */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-blue-800">Let's Talk 👋</h2>
                    <p className="text-gray-600">
                        Have a project in mind? Let's work together! I’m open to collaborations, freelance projects, or just a friendly hello.
                    </p>

                    <div className="space-y-3 text-sm text-gray-700">
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-orange-500" />
                            <strong>Address:</strong> Dhaka, Bangladesh
                        </p>
                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-orange-500" />
                            <strong>Email:</strong> shimupaul96@gmail.com
                        </p>
                        <p className="flex items-center gap-2">
                            <FaPhone className="text-orange-500" />
                            <strong>Phone:</strong> +880 1924549871
                        </p>
                        <p className="flex items-center gap-2">
                            <FaWhatsapp className="text-orange-500" />
                            <strong>WhatsApp:</strong> +880 1763506639
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-5 mt-4 text-xl text-gray-600">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">
                            <FaFacebookF />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-800">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Right Side (Form) */}
                <div className="bg-white shadow-lg rounded-xl p-8">
                    {submitted && (
                        <div className="text-green-600 text-center font-semibold mb-6">
                            ✅ Message sent successfully!
                        </div>
                    )}

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3659/3659736.png"
                        alt="Contact"
                        className="w-16 h-16 mx-auto mb-6"
                    />

                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                        <div>
                            <label htmlFor="user_name" className="block mb-1 font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="user_email" className="block mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                placeholder="Your Email"
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                placeholder="Type your message..."
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                            ></textarea>
                        </div>

                        <input
                            type="submit"
                            value="Send Message"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded w-full cursor-pointer transition duration-200"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

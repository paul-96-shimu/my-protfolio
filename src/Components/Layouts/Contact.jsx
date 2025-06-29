import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 4000);
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <section id="contact" className="bg-gray-100 py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-blue-800">Let's Talk 👋</h2>
                    <p className="text-gray-600">
                        Have a project in mind? Let's work together! I’m open to collaborations, freelance projects, or just a friendly hello.
                    </p>

                    <div className="space-y-3 text-sm text-gray-700">
                        <p><strong>Email:</strong> shimupaul96@gmail.com</p>
                        <p><strong>Phone:</strong> +880 1924549871</p>
                        <p><strong>WhatsApp:</strong> +880 1763506639</p>
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

                {/* Right Side (Form with image) */}
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

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Type your message..."
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition duration-200 w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

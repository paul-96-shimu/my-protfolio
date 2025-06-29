import React from 'react';

const Contact = () => {
    return (
        <section className="max-w-3xl mx-auto py-20 px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="space-y-6 max-w-md mx-auto">
                <div>
                    <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Your message"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
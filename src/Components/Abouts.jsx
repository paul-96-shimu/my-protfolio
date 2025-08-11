import React from 'react';



const Abouts = () => {
    return (
       



        <section className="max-w-3xl mx-auto bg-[#FFF8F3] shadow-md border border-gray-300 rounded p-20 text-center mt-27">
            {/* Title */}
            <h2 className="text-5xl font-bold mb-8">About Me</h2>

            {/* Description */}
            <p className="text-lg leading-relaxed text-black">
                I am <strong>Shimu Paul</strong>, a Full Stack Developer. My programming journey started with HTML and CSS. Later, I learned JavaScript and React. Then I picked up backend development using Node.js and MongoDB. I love solving problems through coding.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-black mb-8">
                Outside programming, I enjoy painting, making gardening, Traveling,  and listening to new music.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
                <div>
                    <p className="font-semibold">Name:</p>
                    <p className="font-bold">Shimu Paul</p>
                </div>
                <div>
                    <p className="font-semibold">Email:</p>
                    <p className="font-bold">shimupaul96@gmail.com</p>
                </div>
                <div className='ml-6'>
                    <p className="font-semibold">Date of birth:</p>
                    <p className="font-bold">01 January 1996</p>
                </div>
                <div>
                    <p className="font-semibold">From:</p>
                    <p className="font-bold">Natore</p>
                </div>
            </div>
        </section>


    );
};

export default Abouts;
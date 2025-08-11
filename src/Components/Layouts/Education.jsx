import React from 'react';

const Education = () => {
    return (
        <section
            id="education"
            className="max-w-3xl mx-auto py-20 px-4 text-center"
        >
            <h2 className="text-4xl font-bold text-black mb-8">Education</h2>
            <div className="text-left text-gray-700 max-w-xl mx-auto space-y-6 text-lg">
                <div>
                    <h3 className="text-2xl font-semibold text-black">B.Sc. in Electrical & Electronices Engginering (EEE)</h3>
                    <p className='text-black'>Europen University of Bangladesh </p>
                    <p className='text-black'> Passing Year: 2022</p>
                    <p className='text-white'>CGPA: 3.58 / 4.00</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-white">Diploma In Engginering</h3>
                    <p className='text-black'>Dhaka Mohila Polytechince Insititute</p>
                    <p className='text-black'> Passing Year: 2017</p>
                    <p className='text-black'>GPA: 3.19 / 4.00</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-black"> Secondary School Certificate (SSC)</h3>
                    <p className='text-black'>Ataikula Jankalyan High School</p>
                    <p className='text-black'> Passing Year: 2012</p>
                    <p className='text-white'>GPA: 4.13 / 5.00</p>
                </div>
            </div>
        </section>
    );
};

export default Education;

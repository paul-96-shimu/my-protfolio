import React from 'react';

const Education = () => {
    return (
        <section
            id="education"
            className="max-w-3xl mx-auto py-20 px-4 text-center"
        >
            <h2 className="text-4xl font-bold mb-8">Education</h2>
            <div className="text-left text-gray-700 max-w-xl mx-auto space-y-6 text-lg">
                <div>
                    <h3 className="text-2xl font-semibold">B.Sc. in Computer Science</h3>
                    <p>XYZ University, 2021 - 2024</p>
                    <p>CGPA: 3.75 / 4.00</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Higher Secondary Certificate (HSC)</h3>
                    <p>ABC College, 2019 - 2021</p>
                    <p>GPA: 5.00 / 5.00</p>
                </div>
            </div>
        </section>
    );
};

export default Education;

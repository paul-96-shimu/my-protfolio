import React from 'react';
import moduleName2 from "../../assets/Frame.svg";

const Education = () => {
  return (
    <section
      id="education"
      className=" mx-auto py-20 px-4 text-center"
    >
      <div className='container mx-auto px-4'>



        <h4 className="text-base font-normal mb-4 flex items-center gap-2 justify-center text-center mb-6"> <img src={moduleName2} alt="" /> Resume</h4>
        <h2 className="text-4xl font-bold text-black mb-12">Education & Experience</h2>

        <div className="flex flex-col md:flex-row gap-16 text-left container mx-auto">

          {/* Education Section */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#FF6B00] pb-2">
              Education
            </h3>

            <div className="space-y-6 text-black text-lg">
              <div>
                <h4 className="font-semibold text-xl">European University of Bangladesh</h4>
                <p className='text-lg text-[#606060]'>
                  B.Sc. in Electrical & Electronics Engineering (EEE)
                </p>
                <p className='text-lg text-[#606060]'> 2022</p>

              </div>

              <div>
                <h4 className="font-semibold text-xl"> Dhaka Mohila Polytechnic Institute</h4>
                <p className='text-lg text-[#606060]'>
                  Diploma in Engineering
                </p>
                <p className='text-lg text-[#606060]'> 2017</p>

              </div>

              <div>
                <h4 className="font-semibold text-xl">Programming Hero</h4>
                <p className='text-lg text-[#606060]'>Online / Self-paced</p>
                <p className='text-lg text-[#606060]'>Frontend Developer Course (6 months)</p>
                <p className='text-lg text-[#606060]'>Duration: Jan 2025 - July 2025</p>
                <p>
                  Completed an intensive frontend development course focusing on React, JavaScript, and modern web technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#FF6B00] pb-2">
              Professional Experience
            </h3>

            <div className="space-y-6 text-black text-lg">
              <div>

                <p> 2023 -  2024</p>
                <h4 className="font-semibold text-xl"> Advance ABC Corporation</h4>
                <p className='text-lg text-[#606060]'>Supply Chain Officer</p>

                <p className='text-lg font-bold mt-4'>Responsibilities:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Order Processing</li>
                  <li>Bill Making</li>
                  <li>Participating in supply chain optimization</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="max-w-3xl mx-auto py-20 px-4 text-center"
    >
      <h2 className="text-4xl font-bold text-black mb-12">Education & Experience</h2>
      
      <div className="flex flex-col md:flex-row gap-16 text-left max-w-4xl mx-auto">
        
        {/* Education Section */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-black mb-6 border-b-4 border-[#FF6B00] pb-2">
            Education
          </h3>

          <div className="space-y-6 text-black text-lg">
            <div>
              <h4 className="font-semibold text-xl">B.Sc. in Electrical & Electronics Engineering (EEE)</h4>
              <p>European University of Bangladesh</p>
              <p>Passing Year: 2022</p>
              <p>CGPA: 3.58 / 4.00</p>
            </div>

            <div>
              <h4 className="font-semibold text-xl">Diploma In Engineering</h4>
              <p>Dhaka Mohila Polytechnic Institute</p>
              <p>Passing Year: 2017</p>
              <p>GPA: 3.19 / 4.00</p>
            </div>

            <div>
              <h4 className="font-semibold text-xl">Frontend Developer Course (6 months)</h4>
              <p>Online / Self-paced</p>
              <p>Pograming Hero</p>
              <p>Duration: Jan 2024 - Jun 2024</p>
              <p>
                Completed an intensive frontend development course focusing on React, JavaScript, and modern web technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-black mb-6 border-b-4 border-[#FF6B00] pb-2">
            Professional Experience
          </h3>

          <div className="space-y-6 text-black text-lg">
            <div>
              <h4 className="font-semibold text-xl">Supply Chain Officer</h4>
              <p>Advance ABC Corporation</p>
              <p>Duration: Jan 2023 - Dec 2024</p>
              <p>Responsibilities:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Order Processing</li>
                <li>Bill Making</li>
                <li>Participating in supply chain optimization</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

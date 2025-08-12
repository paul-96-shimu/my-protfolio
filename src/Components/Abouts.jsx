import React from "react";
import moduleName from "../assets/shimupaul.png";
import moduleName1 from "../assets/check2-square 3.svg";
import moduleName2 from "../assets/Frame.svg";

const Abouts = () => {
    return (
        <section
            id="about"
            className=" mx-auto rounded p-10 md:p-20 text-center md:text-left mt-10"
        >
            <div className="flex flex-col md:flex-row items-center gap-20  container mx-auto">
                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                        src={moduleName}
                        alt="Shimu Paul"
                          loading="lazy"
                        className="w-[560px] h-[768px] object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Content */}
                <div className="">
                    <h4 className="text-base font-normal mb-4 flex items-center gap-2"> <img src={moduleName2} alt="" /> About Me</h4>

                    <h1 className="text-4xl font-bold mb-4">I Can  develop <br /> Anything You  imagine
                    </h1>

                    <p className="text-base leading-relaxed text-gray-800 mt-5">
                        I am <strong>Shimu Paul</strong>, a Full Stack Developer. My
                        programming journey started with HTML and CSS. <br /> Later, I learned
                        JavaScript and React. Then I picked up backend development using <br />
                        Node.js and MongoDB. I love solving problems through coding.
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-gray-800">
                        Outside programming, I enjoy painting, gardening, traveling, and
                        listening to new music.



                        <div className="flex items-center gap-2 mt-4">

                            <img
                            src={moduleName1}
                            alt="Checkmark"
                            className="w-[14px] h-[14px]"
                        />

                        <small className="font-medium">Web Design Full stack</small>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-4">

                            <img
                            src={moduleName1}
                            alt="Checkmark"
                            className="w-[14px] h-[14px]"
                        />

                        <small className="font-medium">Frontend Web Developer</small>
                        </div>

                        <div className="flex items-center gap-2 mt-4">

                            <img
                            src={moduleName1}
                            alt="Checkmark"
                            className="w-[14px] h-[14px]"
                        />

                        <small className="font-medium">Learner Next.js</small>
                        </div>

                    </p>
                </div>


            </div>


            

        </section>
    );
};

export default Abouts;

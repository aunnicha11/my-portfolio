import React from "react";

const About = () => { 
  return (
    <div name="about" id="about" className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Aunnicha Susukpitakkul. 
                nice to meet you.
              </p>
            </div>
            <div>
              <p>
                {" "}
                As a versatile professional, I bring to the table over a year of experience seamlessly navigating the realms of both Administrative Assistance and Programming. My skill set is a well-rounded blend of expertise, specializing in the art of making office operations smoother, efficiently managing projects, and crafting intricate software solutions. I find joy in the daily challenges of enhancing productivity and creating seamless workflows. Beyond just meeting expectations, I am dedicated to exceeding them, consistently delivering work of the highest quality. With a passion for problem-solving and a commitment to excellence, I strive to make a meaningful impact in every role I undertake, showcasing not only proficiency but also a touch of creativity and flair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
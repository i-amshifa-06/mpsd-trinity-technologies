import FadeIn from "./FadeIn";
import { useState } from "react";

export default function Careers({ onApply }) {
const [showMore, setShowMore] = useState(false);

const jobs = [
{
  title: "Frontend Web Developer",
  type: "Full Time",
  location: "Remote / Chennai",
  description:
    "Develop responsive and interactive user interfaces using React, JavaScript, Tailwind CSS, and modern frontend technologies.",
},
{
  title: "Full Stack Web Developer",
  type: "Full Time",
  location: "Remote / Chennai",
  description:
    "Build complete web applications using frontend and backend technologies, APIs, databases, and cloud services.",
},
{
  title: "Mobile App Developer",
  type: "Full Time",
  location: "Remote / Chennai",
  description:
    "Design and develop Android and cross-platform mobile applications with modern frameworks and excellent user experiences.",
},

{
title: "AI & Machine Learning Engineer",
type: "Full Time",
location: "Chennai / Remote",
description:
"Develop intelligent AI solutions, machine learning models, predictive analytics, and healthcare-focused AI systems.",
},
{
title: "Software Developer",
type: "Full Time",
location: "Chennai, Tamil Nadu",
description:
"Build modern web applications, business platforms, APIs, and scalable software solutions.",
},
{
title: "IoT & Robotics Engineer",
type: "Full Time",
location: "Chennai, Tamil Nadu",
description:
"Develop smart IoT devices, automation systems, robotics solutions, and connected ecosystems.",
},
{
title: "Cloud & DevOps Engineer",
type: "Full Time",
location: "Remote",
description:
"Manage cloud infrastructure, deployments, security, scalability, and automation pipelines.",
},
{
title: "AI Chatbot Developer",
type: "Full Time",
location: "Remote",
description:
"Design and develop AI-powered chatbots, conversational systems, and business automation solutions.",
},
{
title: "IT Consultant",
type: "Full Time",
location: "Chennai / Hybrid",
description:
"Help businesses adopt technology, improve digital processes, and achieve digital transformation goals.",
},
];

const visibleJobs = showMore
? jobs
: jobs.slice(0, 3);

return ( <FadeIn> <section
   id="careers"
   className="py-24 bg-[#022b3a]"
 > <div className="max-w-7xl mx-auto px-6">


    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Join Our Team
      </h2>

      <p className="mt-4 text-[#bfdbf7] max-w-2xl mx-auto">
        Become part of a passionate team building innovative
        technology solutions for the future.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {visibleJobs.map((job, index) => (
        <div
          key={index}
          className="
          bg-white
          rounded-3xl
          p-8
          shadow-xl
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-300
          flex
          flex-col
          "
        >
          <span
            className="
            inline-block
            w-fit
            bg-[#e1e5f2]
            text-[#022b3a]
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            mb-5
            "
          >
            {job.type}
          </span>

          <h3 className="text-2xl font-bold text-[#022b3a]">
            {job.title}
          </h3>

          <p className="text-[#1f7a8c] mt-2 font-medium">
            {job.location}
          </p>

          <p className="mt-5 text-gray-600 leading-7 flex-grow">
            {job.description}
          </p>

          <button
            onClick={onApply}
            className="
            mt-8
            w-full
            bg-[#1f7a8c]
            hover:bg-[#056c92]
            text-white
            py-3.5
            rounded-xl
            font-semibold
            shadow-md
            hover:shadow-lg
            transition-all
            duration-300
            "
          >
            Apply Now
          </button>

        </div>
      ))}
    </div>

    <div className="flex justify-center mt-12">
      <button
        onClick={() => setShowMore(!showMore)}
        className="
        bg-white
        text-[#022b3a]
        border-2
        border-[#1f7a8c]
        px-8
        py-3
        rounded-xl
        font-semibold
        shadow-md
        hover:bg-[#1f7a8c]
        hover:text-white
        transition-all
        duration-300
        "
      >
        {showMore
          ? "Show Less Opportunities"
          : "Show More Opportunities"}
      </button>
    </div>

  </div>
</section>
</FadeIn>

);
}

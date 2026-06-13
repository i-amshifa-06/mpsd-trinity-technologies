import FadeIn from "./FadeIn";
import { useState } from "react";

export default function Internship({ onApply }) {
const [showMore, setShowMore] = useState(false);

const internships = [
{
  title: "Frontend Web Development Intern",
  duration: "3 - 6 Months",
  mode: "Hybrid",
  description:
    "Learn React, JavaScript, Tailwind CSS, responsive design, and modern frontend development practices.",
},
{
  title: "Full Stack Web Development Intern",
  duration: "3 - 6 Months",
  mode: "Hybrid",
  description:
    "Work on frontend and backend technologies, APIs, databases, and complete web application development.",
},
{
  title: "Mobile App Development Intern",
  duration: "3 - 6 Months",
  mode: "Hybrid",
  description:
    "Build Android and cross-platform mobile applications while gaining real-world development experience.",
},
{
title: "AI & Machine Learning Intern",
duration: "3 - 6 Months",
mode: "Hybrid",
description:
"Assist in AI model development, machine learning research, healthcare analytics, and automation projects.",
},
{
title: "Software Development Intern",
duration: "3 - 6 Months",
mode: "Hybrid",
description:
"Work on React, web applications, APIs, UI development, and software engineering projects.",
},
{
title: "IoT & Robotics Intern",
duration: "3 - 6 Months",
mode: "On Site",
description:
"Build IoT devices, robotics prototypes, automation systems, and smart technology solutions.",
},
{
title: "Cloud Technology Intern",
duration: "3 - 6 Months",
mode: "Remote",
description:
"Learn cloud infrastructure, deployment strategies, monitoring, and DevOps fundamentals.",
},
{
title: "AI Chatbot Development Intern",
duration: "3 - 6 Months",
mode: "Remote",
description:
"Create conversational AI systems, chatbot integrations, and intelligent customer support tools.",
},
{
title: "Digital Transformation Intern",
duration: "3 - 6 Months",
mode: "Hybrid",
description:
"Support technology consulting projects, business process automation, and digital innovation initiatives.",
},
];

const visibleInternships = showMore
? internships
: internships.slice(0, 3);

return ( <FadeIn> <section
   id="internship"
   className="py-24 bg-[#f9fafd]"
 > <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}
    <div className="text-center mb-16">

      <span
        className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-[#e1e5f2]
        text-[#1f7a8c]
        font-medium
        mb-4
        "
      >
        Internship Program
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#022b3a]">
        Launch Your Career With Us
      </h2>

      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Gain real-world experience by working on innovative
        projects in Artificial Intelligence, Robotics, IoT,
        Software Development, Cloud Technologies, and
        Digital Transformation.
      </p>

    </div>

    {/* Internship Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {visibleInternships.map((internship, index) => (
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
          <div className="flex gap-3 flex-wrap mb-5">

            <span
              className="
              bg-[#bfdbf7]
              text-[#022b3a]
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              "
            >
              {internship.duration}
            </span>

            <span
              className="
              bg-[#e1e5f2]
              text-[#1f7a8c]
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              "
            >
              {internship.mode}
            </span>

          </div>

          <h3 className="text-2xl font-bold text-[#022b3a]">
            {internship.title}
          </h3>

          <p className="mt-5 text-gray-600 leading-7 flex-grow">
            {internship.description}
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
            Apply For Internship
          </button>

        </div>
      ))}

    </div>

    {/* Show More Button */}
    <div className="flex justify-center mt-12">

      <button
        onClick={() => setShowMore(!showMore)}
        className="
        border-2
        border-[#1f7a8c]
        text-[#022b3a]
        px-8
        py-3
        rounded-xl
        font-semibold
        hover:bg-[#1f7a8c]
        hover:text-white
        transition-all
        duration-300
        shadow-md
        "
      >
        {showMore
          ? "Show Less Internships"
          : "Show More Internships"}
      </button>

    </div>

  </div>
</section>
</FadeIn>

);
}

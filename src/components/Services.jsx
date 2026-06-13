import FadeIn from "./FadeIn";
import { useState } from "react";
import {
FaCode,
FaMobileAlt,
FaRobot,
FaCloud,
FaMicrochip,
FaLaptopCode,
FaComments,
} from "react-icons/fa";

export default function Services() {
const [showMore, setShowMore] = useState(false);

const services = [
{
icon: <FaCode size={40} />,
title: "Web Development",
desc: "Modern, responsive, and scalable websites designed for startups and enterprises.",
},
{
icon: <FaMobileAlt size={40} />,
title: "Mobile App Development",
desc: "Cross-platform mobile applications with seamless user experiences.",
},
{
icon: <FaRobot size={40} />,
title: "AI Solutions",
desc: "Artificial Intelligence systems that automate processes and improve efficiency.",
},
{
icon: <FaCloud size={40} />,
title: "Cloud Services",
desc: "Secure cloud infrastructure, deployment, and management solutions.",
},
{
icon: <FaMicrochip size={40} />,
title: "IoT Development",
desc: "Smart device integration and real-time IoT monitoring systems.",
},
{
icon: <FaLaptopCode size={40} />,
title: "IT Consulting",
desc: "Professional consulting services for digital transformation and innovation.",
},
{
icon: <FaRobot size={40} />,
title: "Robotics",
desc: "Design and development of intelligent robotic systems for automation, research, and industrial applications.",
},
{
icon: <FaComments size={40} />,
title: "AI Chatbot",
desc: "Custom AI-powered chatbots for customer support, business automation, and intelligent communication.",
},
];

const visibleServices = showMore
? services
: services.slice(0, 3);

return ( <FadeIn> <section
   id="services"
   className="
   py-24
   bg-gradient-to-b
   from-[#022b3a]
   to-[#1f7a8c]
   "
 > <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Our Services
      </h2>

      <p className="mt-4 text-[#e1e5f2] max-w-2xl mx-auto">
        Delivering innovative technology solutions that help
        businesses grow, automate processes, and transform digitally.
      </p>

    </div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {visibleServices.map((service, index) => (
        <div
          key={index}
          className="
          bg-white
          rounded-3xl
          p-8
          shadow-lg
          border
          border-[#bfdbf7]
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-300
          "
        >
          <div className="text-[#1f7a8c] mb-6">
            {service.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#022b3a] mb-4">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Show More Button */}
    <div className="flex justify-center mt-12">

      <button
        onClick={() => setShowMore(!showMore)}
        className="
        bg-white
        text-[#022b3a]
        hover:bg-[#bfdbf7]
        px-8
        py-4
        rounded-xl
        font-semibold
        transition-all
        duration-300
        shadow-lg
        "
      >
        {showMore
          ? "Show Less Services"
          : "Show More Services"}
      </button>

    </div>

  </div>
</section>
</FadeIn>

);
}

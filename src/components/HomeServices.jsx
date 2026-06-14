import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

export default function HomeServices() {
  const services = [
    {
      title: "Artificial Intelligence",
      description:
        "Custom AI solutions, machine learning systems, and intelligent automation.",
    },
    {
      title: "Web & Mobile Development",
      description:
        "Modern websites, full-stack applications, and cross-platform mobile apps.",
    },
    {
      title: "IoT & Digital Transformation",
      description:
        "Smart connected devices, automation systems, and business transformation solutions.",
    },
  ];

  return (
    <FadeIn>
      <section className="py-24 bg-[#f9fafd]">
        <div className="max-w-7xl mx-auto px-6">

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
              Our Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#022b3a]">
              Solutions We Deliver
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We help businesses, startups, healthcare organizations,
              and enterprises leverage technology to solve real-world problems.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                "
              >
                <h3 className="text-2xl font-bold text-[#022b3a]">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">

            <Link
              to="/services"
              className="
              inline-block
              bg-[#1f7a8c]
              hover:bg-[#056c92]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
              "
            >
              View All Services
            </Link>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

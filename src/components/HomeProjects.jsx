import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

export default function HomeProjects() {
  return (
    <FadeIn>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

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
              Featured Project
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#022b3a]">
              Our Latest Innovation
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Discover how we use Artificial Intelligence and Healthcare
              technology to create impactful solutions for people worldwide.
            </p>

          </div>

          {/* Project Card */}
          <div className="max-w-xl mx-auto">

            <div
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              border
              border-[#e1e5f2]
              hover:-translate-y-2
              "
            >

              {/* Project Banner */}
              <div
                className="
                h-40
                bg-gradient-to-r
                from-[#022b3a]
                via-[#1f7a8c]
                to-[#022b3a]
                flex
                items-center
                justify-center
                "
              >
                <h3
                  className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                  "
                >
                  GlyGuard AI
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#022b3a]">
                  AI-Powered Diabetes Management
                </h3>

                <p
                  className="
                  mt-3
                  text-gray-600
                  leading-7
                  "
                >
                  Smart healthcare platform helping diabetic patients
                  monitor health, receive AI-powered insights, and
                  improve well-being through predictive analytics and
                  intelligent recommendations.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">

                  <span
                    className="
                    bg-[#e1e5f2]
                    text-[#022b3a]
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    "
                  >
                    Artificial Intelligence
                  </span>

                  <span
                    className="
                    bg-[#e1e5f2]
                    text-[#022b3a]
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    "
                  >
                    Healthcare
                  </span>

                  <span
                    className="
                    bg-[#e1e5f2]
                    text-[#022b3a]
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    "
                  >
                    Analytics
                  </span>

                </div>

                {/* Button */}
                <Link
                  to="/projects"
                  className="
                  inline-block
                  mt-6
                  bg-[#1f7a8c]
                  hover:bg-[#056c92]
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  "
                >
                  View Project
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

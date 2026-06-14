import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

export default function HomeCareers() {
  return (
    <FadeIn>
      <section className="py-24 bg-[#f9fafd]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

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
              Careers & Internship
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#022b3a]">
              Join Our Team
            </h2>

            <p
              className="
              mt-6
              text-gray-600
              max-w-3xl
              mx-auto
              leading-8
              "
            >
              Become part of MPSD Trinity Technologies and work on
              innovative projects in Artificial Intelligence,
              Healthcare Technology, Web Development, Mobile Apps,
              Cloud Computing, IoT, Robotics, and Digital Transformation.
            </p>

            <div
              className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-5
              "
            >
              <Link
                to="/careers"
                className="
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
                View Careers
              </Link>

              <Link
                to="/internship"
                className="
                border-2
                border-[#1f7a8c]
                text-[#1f7a8c]
                hover:bg-[#1f7a8c]
                hover:text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                "
              >
                Internship Program
              </Link>
            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

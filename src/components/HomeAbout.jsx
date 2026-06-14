import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

export default function HomeAbout() {
  return (
    <FadeIn>
      <section className="py-24 bg-white">
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
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#022b3a]">
              Technology That Creates Impact
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
              MPSD Trinity Technologies specializes in
              Artificial Intelligence, Healthcare Technology,
              IoT Solutions, Software Development, Mobile Apps,
              Cloud Solutions, and Digital Transformation.
            </p>

            <Link
              to="/about"
              className="
              inline-block
              mt-8
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
              Learn More About Us
            </Link>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

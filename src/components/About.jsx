import FadeIn from "./FadeIn";
export default function About() {
  return (
  <FadeIn>
    <section
      id="about"
      className="py-24 bg-[#f9fafd]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          "
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Founder Image */}
            <div
              className="
              flex
              justify-center
              items-center
              p-8
              lg:p-12
              "
            >
              <img
                src="/founder.jpg"
                alt="Daniel S"
                className="
                w-full
                max-w-md
                object-cover
                rounded-[10px]
                shadow-2xl
                "
              />
            </div>

            {/* Founder Message */}
            <div
              className="
              p-8
              md:p-12
              lg:p-16
              "
            >
              <p className="text-[#1f7a8c] font-medium mb-4">
                Founder Message
              </p>

              <div className="w-20 h-1 bg-[#1f7a8c] mb-8"></div>

              <h2
                className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#022b3a]
                mb-8
                "
              >
                Turning Ideas Into Innovation
              </h2>

              <p
                className="
                text-gray-700
                text-lg
                leading-9
                "
              >
                <span className="font-bold text-[#022b3a]">
                  Daniel S
                </span>{" "}
                is the Founder and CEO of MPSD Trinity Technologies.
                Currently pursuing B.Sc. Microbiology at Vels Institute
                of Science, Technology & Advanced Studies, he founded
                MPSD Trinity Technologies with a vision to bridge the gap
                between healthcare and technology through innovation.
                Inspired by real-world healthcare challenges and the
                growing possibilities of Artificial Intelligence,
                Internet of Things (IoT), and digital transformation,
                he believes technology should be accessible, practical,
                and impactful for everyone. With continuous support from
                college mentors, faculty members, the incubation ecosystem,
                friends, and team members, he transformed an idea into a
                startup focused on building innovative solutions that improve
                healthcare, enhance accessibility, and create meaningful
                social impact. Through MPSD Trinity Technologies, his goal
                is to develop future-ready technologies that empower
                individuals, businesses, and communities while driving
                innovation for a better tomorrow.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#022b3a]">
                  Daniel S
                </h3>

                <p className="text-[#1f7a8c] font-medium mt-2">
                  Founder & CEO, MPSD Trinity Technologies
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
</FadeIn>
);
}

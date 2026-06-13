import FadeIn from "./FadeIn";
export default function FeaturedProjects() {
return ( <FadeIn> <section
   id="projects"
   className="py-24 bg-[#f4f5fa]"
 > <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold text-[#022b3a]">
        Featured Project
      </h2>

      <p className="mt-4 text-[#1f7a8c] max-w-2xl mx-auto">
        Our flagship healthcare innovation powered by Artificial Intelligence.
      </p>

    </div>

    {/* Single Project Card */}
    <div className="flex justify-center">

      <div
        className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-xl
        hover:-translate-y-2
        transition-all
        duration-300
        w-full
        max-w-md
        "
      >

        {/* Banner */}
        <div
          className="
          h-52
          bg-gradient-to-r
          from-[#1f7a8c]
          to-[#022b3a]
          flex
          items-center
          justify-center
          "
        >
          <h3 className="text-white text-3xl font-bold">
            GlyGuard AI
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">

          <h3 className="text-xl font-bold text-[#022b3a]">
            GlyGuard AI
          </h3>

          <p className="mt-3 text-gray-600">
            An AI-powered healthcare platform focused on diabetes
            monitoring, predictive insights, and smarter health
            management for patients and healthcare providers.
          </p>

          <button
            className="
            mt-5
            bg-[#022b3a]
            text-white
            px-5
            py-2
            rounded-lg
            hover:bg-[#1f7a8c]
            transition
            "
          >
            Learn More
          </button>

        </div>

      </div>

    </div>

  </div>
</section>
</FadeIn>

);
}

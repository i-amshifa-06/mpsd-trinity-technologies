import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
return ( <section
   id="home"
   className="
   min-h-screen
   bg-gradient-to-br
   from-[#022b3a]
   via-[#1f7a8c]
   to-[#022b3a]
   text-white
   flex
   items-center
   pt-32
   pb-20
   md:pt-24
   md:pb-10
   overflow-hidden
   "
 > <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">


    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
        flex
        justify-center
        order-1
        lg:order-2
        mb-10
        lg:mb-0
        relative
        z-10
        "
      >
        <div
          className="
          relative
          w-64
          h-64
          sm:w-80
          sm:h-80
          md:w-96
          md:h-96
          lg:w-[450px]
          lg:h-[450px]
          "
        >
          <div
            className="
            absolute
            inset-0
            bg-[#bfdbf7]/30
            blur-3xl
            rounded-full
            "
          ></div>

          <div
            className="
            relative
            w-full
            h-full
            bg-white
            rounded-3xl
            shadow-2xl
            flex
            items-center
            justify-center
            p-6
            md:p-8
            "
          >
            <img
              src="/logo.jpg"
              alt="MPSD Trinity Technologies"
              className="
              max-w-full
              max-h-full
              object-contain
              "
            />
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
        order-2
        lg:order-1
        text-center
        lg:text-left
        "
      >
        <div
          className="
          inline-block
          bg-white/10
          backdrop-blur-sm
          border
          border-white/20
          px-5
          py-3
          rounded-full
          mb-8
          "
        >
          <span className="text-[#bfdbf7] text-sm font-medium">
            Innovate • Integrate • Impact
          </span>
        </div>

        <h1
          className="
          text-4xl
          sm:text-5xl
          lg:text-7xl
          font-bold
          leading-tight
          "
        >
          Building The
          <br />

          <span className="text-[#bfdbf7]">
            Future
          </span>

          <br />

          Through Innovation
        </h1>

        <p
          className="
          mt-6
          text-[#e1e5f2]
          text-base
          md:text-lg
          leading-relaxed
          max-w-2xl
          mx-auto
          lg:mx-0
          "
        >
          MPSD Trinity Technologies develops innovative healthcare,
          artificial intelligence, IoT, and digital transformation
          solutions designed to improve lives and empower businesses
          through technology.
        </p>

        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-5
          justify-center
          lg:justify-start
          mb-6
          "
        >
          <Link
  to="/projects"
  className="
  w-full
  sm:w-auto
  bg-[#1f7a8c]
  hover:bg-[#056c92]
  text-white
  px-8
  py-4
  rounded-xl
  font-semibold
  transition-all
  duration-300
  hover:scale-105
  text-center
  "
>
  Explore Projects
</Link>

          <Link
  to="/contact"
  className="
  w-full
  sm:w-auto
  border-2
  border-[#bfdbf7]
  text-[#bfdbf7]
  hover:bg-[#bfdbf7]
  hover:text-[#022b3a]
  px-8
  py-4
  rounded-xl
  font-semibold
  transition-all
  duration-300
  text-center
  "
>
  Contact Us
</Link>
        </div>

      </motion.div>

    </div>

  </div>
</section>


);
}

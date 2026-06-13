import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`
      fixed inset-0
      z-[9999]
      flex flex-col
      items-center
      justify-center
      bg-[#022b3a]
      transition-opacity
      duration-1000
      ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        w-[300px]
        h-[300px]
        md:w-[450px]
        md:h-[450px]
        rounded-full
        bg-[#bfdbf7]/20
        blur-3xl
        "
      ></div>

      {/* Logo Container */}
      <div
  className="
  relative
  bg-[#f8fbff]
  rounded-[30px]
  shadow-2xl
  p-6
  md:p-8
  border
  border-[#bfdbf7]
  animate-[pulse_3s_ease-in-out_infinite]
  "
>
        <img
  src="/splash.png"
  alt="MPSD Trinity Technologies"
  className="
  w-36
  h-36
  sm:w-44
  sm:h-44
  md:w-52
  md:h-52
  object-contain
  "
/>
      </div>

      {/* Company Name */}
      <h1
        className="
        mt-8
        text-center
        text-white
        font-bold
        tracking-wide
        text-3xl
        sm:text-4xl
        md:text-5xl
        px-4
        "
      >
        MPSD TRINITY
        <br />
        TECHNOLOGIES
      </h1>

      {/* Tagline */}
      <p
        className="
        mt-4
        text-[#bfdbf7]
        text-center
        text-sm
        sm:text-base
        md:text-lg
        "
      >
        Innovate • Integrate • Impact
      </p>

      {/* Loading Bar */}
      <div
        className="
        mt-10
        w-72
        sm:w-96
        h-2
        bg-[#0f3d4d]
        rounded-full
        overflow-hidden
        "
      >
        <div
          className="
          h-full
          bg-[#bfdbf7]
          animate-[loading_4s_linear_forwards]
          "
        />
      </div>

      {/* Loading Text */}
      <p
        className="
        mt-4
        text-[#e1e5f2]
        text-sm
        tracking-widest
        "
      >
        LOADING...
      </p>
    </div>
  );
}

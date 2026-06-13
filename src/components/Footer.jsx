import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="bg-[#022b3a] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div
  className="
  bg-[#e1e5f2]
  p-2
  rounded-xl
  shadow-md
  "
>
  <img
    src="/splash.png"
    alt="MPSD Trinity Technologies"
    className="
    h-12
    w-12
    object-contain
    rounded-[10px]
    "
  />
</div>

              <div>
                <h3 className="font-bold text-lg">
                  MPSD Trinity Technology
                </h3>

                <p className="text-[#bfdbf7] text-sm">
                  Innovate • Integrate • Impact
                </p>
              </div>

            </div>

            <p className="text-gray-300 leading-7">
              Building innovative solutions in Healthcare,
              Artificial Intelligence, IoT, and Digital
              Transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-[#bfdbf7]"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-[#bfdbf7]"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-[#bfdbf7]"
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-[#bfdbf7]"
              >
                Projects
              </button>

            </div>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Opportunities
            </h3>

            <div className="flex flex-col gap-3">

              <button
                onClick={() => scrollToSection("careers")}
                className="text-left hover:text-[#bfdbf7]"
              >
                Careers
              </button>

              <button
                onClick={() => scrollToSection("internship")}
                className="text-left hover:text-[#bfdbf7]"
              >
                Internships
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-[#bfdbf7]"
              >
                Contact Us
              </button>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="
                bg-[#1f7a8c]
                p-3
                rounded-xl
                hover:bg-[#056c92]
                transition
                "
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="
                bg-[#1f7a8c]
                p-3
                rounded-xl
                hover:bg-[#056c92]
                transition
                "
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="
                bg-[#1f7a8c]
                p-3
                rounded-xl
                hover:bg-[#056c92]
                transition
                "
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="
                bg-[#1f7a8c]
                p-3
                rounded-xl
                hover:bg-[#056c92]
                transition
                "
              >
                <FaGithub size={20} />
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div
        className="
        border-t
        border-[#1f7a8c]/40
        py-6
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >
          <p className="text-gray-300 text-center">
            © 2026 MPSD Trinity Technologies.
            All Rights Reserved.
          </p>

          <p className="text-[#bfdbf7] text-center">
            Built with ❤️ by MPSD Trinity Technologies
          </p>
        </div>
      </div>

    </footer>
  );
}

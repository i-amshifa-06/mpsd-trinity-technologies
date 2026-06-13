import FadeIn from "./FadeIn";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/mbdezavo",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
        e.target.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <FadeIn>
      <section
        id="contact"
        className="py-24 bg-[#022b3a]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span
              className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-[#1f7a8c]
              text-white
              font-medium
              mb-4
              "
            >
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's Build Something Amazing Together
            </h2>

            <p className="mt-4 text-[#bfdbf7] max-w-3xl mx-auto">
              Have a project idea, business inquiry, or collaboration opportunity?
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="bg-white rounded-3xl p-8 shadow-xl">

              <h3 className="text-3xl font-bold text-[#022b3a] mb-8">
                Get In Touch
              </h3>

              <div className="space-y-8">

                <div className="flex items-start gap-4">
                  <div className="bg-[#e1e5f2] p-4 rounded-xl">
                    <FaEnvelope className="text-[#1f7a8c]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#022b3a]">
                      Email
                    </h4>

                    <p className="text-gray-600 break-all">
                      mpsdtrinitytechnologys2026@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#e1e5f2] p-4 rounded-xl">
                    <FaPhoneAlt className="text-[#1f7a8c]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#022b3a]">
                      Phone
                    </h4>

                    <p className="text-gray-600">
                      +91 86085 42881
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#e1e5f2] p-4 rounded-xl">
                    <FaMapMarkerAlt className="text-[#1f7a8c]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#022b3a]">
                      Location
                    </h4>

                    <p className="text-gray-600 leading-7">
                      1/B, Cheppai Jayavelu Street,
                      Near Church, Gargil Nagar,
                      Tiruvottiyur,
                      Tiruvallur District,
                      Tamil Nadu - 600019
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#e1e5f2] p-4 rounded-xl">
                    <FaClock className="text-[#1f7a8c]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#022b3a]">
                      Working Hours
                    </h4>

                    <p className="text-gray-600">
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">

              {success && (
                <div className="mb-6 bg-green-100 border border-green-500 text-green-700 px-4 py-4 rounded-xl">
                  ✓ Message sent successfully! We will contact you soon.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10 Digit Phone Number"
                  onInput={(e) => {
                    e.target.value =
                      e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full border rounded-xl px-4 py-3"
                />

                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full border rounded-xl px-4 py-3"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                  w-full
                  bg-[#1f7a8c]
                  hover:bg-[#056c92]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  "
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

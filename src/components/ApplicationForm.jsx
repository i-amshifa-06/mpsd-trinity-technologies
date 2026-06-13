import { useState } from "react";

export default function ApplicationForm({
  type,
  onClose,
}) {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const formAction =
    type === "career"
      ? "https://formspree.io/f/xrevoaoo"
      : "https://formspree.io/f/xdavplpv";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        formAction,
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
          onClose();
        }, 4000);
      } else {
        alert(
          "Failed to submit application."
        );
      }
    } catch (error) {
      alert(
        "Something went wrong. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
      "
    >
      <div
        className="
        bg-white
        w-full
        max-w-3xl
        rounded-3xl
        shadow-2xl
        max-h-[90vh]
        overflow-y-auto
        "
      >
        {/* Header */}

        <div
          className="
          flex
          justify-between
          items-center
          p-6
          border-b
          "
        >
          <h2 className="text-3xl font-bold text-[#022b3a]">
            {type === "career"
              ? "Career Application"
              : "Internship Application"}
          </h2>

          <button
            onClick={onClose}
            type="button"
            className="
            text-2xl
            font-bold
            text-gray-500
            hover:text-red-500
            "
          >
            ×
          </button>
        </div>

        <div className="p-8">

          {success && (
            <div
              className="
              mb-6
              bg-green-100
              border
              border-green-500
              text-green-700
              px-4
              py-4
              rounded-xl
              text-center
              font-medium
              "
            >
              ✓ Application submitted successfully!
              <br />
              Our team will review your application and contact you soon.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="hidden"
              name="Application Type"
              value={
                type === "career"
                  ? "Career"
                  : "Internship"
              }
            />

            {/* Common Fields */}

            <input
              type="text"
              name="Full Name"
              required
              placeholder="Full Name"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              "
            />

            <input
              type="email"
              name="Email"
              required
              placeholder="Email Address"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              "
            />

            <input
              type="tel"
              name="Phone"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              inputMode="numeric"
              placeholder="10 Digit Phone Number"
              onInput={(e) => {
                e.target.value =
                  e.target.value.replace(
                    /\D/g,
                    ""
                  );
              }}
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              "
            />

            {type === "career" ? (
              <>
                <input
                  type="text"
                  name="Qualification"
                  required
                  placeholder="Highest Qualification"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="text"
                  name="Experience"
                  required
                  placeholder="Years of Experience"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <select
                  name="Position"
                  required
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                >
                  <option value="">
                    Select Position
                  </option>

                  <option>
                    Frontend Web Developer
                  </option>

                  <option>
                    Full Stack Web Developer
                  </option>

                  <option>
                    Mobile App Developer
                  </option>

                  <option>
                    AI & Machine Learning Engineer
                  </option>

                  <option>
                    Software Developer
                  </option>

                  <option>
                    IoT & Robotics Engineer
                  </option>

                  <option>
                    Cloud & DevOps Engineer
                  </option>

                  <option>
                    AI Chatbot Developer
                  </option>

                  <option>
                    IT Consultant
                  </option>
                </select>

                <input
                  type="url"
                  name="Resume Link"
                  required
                  placeholder="Google Drive Resume Link"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="url"
                  name="LinkedIn"
                  placeholder="LinkedIn Profile (Optional)"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="url"
                  name="Portfolio"
                  placeholder="Portfolio Website (Optional)"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="College"
                  required
                  placeholder="College Name"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="text"
                  name="Department"
                  required
                  placeholder="Department"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <select
                  name="Year"
                  required
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                >
                  <option value="">
                    Select Year
                  </option>

                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>

                <select
                  name="Internship"
                  required
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                >
                  <option value="">
                    Select Internship
                  </option>

                  <option>
                    Frontend Web Development Intern
                  </option>

                  <option>
                    Full Stack Web Development Intern
                  </option>

                  <option>
                    Mobile App Development Intern
                  </option>

                  <option>
                    AI & Machine Learning Intern
                  </option>

                  <option>
                    Software Development Intern
                  </option>

                  <option>
                    IoT & Robotics Intern
                  </option>

                  <option>
                    Cloud Technology Intern
                  </option>

                  <option>
                    AI Chatbot Development Intern
                  </option>

                  <option>
                    Digital Transformation Intern
                  </option>
                </select>

                <input
                  type="url"
                  name="Resume Link"
                  required
                  placeholder="Google Drive Resume Link"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="url"
                  name="LinkedIn"
                  placeholder="LinkedIn Profile (Optional)"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />

                <input
                  type="url"
                  name="Portfolio"
                  placeholder="GitHub / Portfolio Link (Optional)"
                  className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  "
                />
              </>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
              w-full
              bg-[#1f7a8c]
              hover:bg-[#056c92]
              disabled:bg-gray-400
              text-white
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
              "
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Application"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

import React from "react";

function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto max-w-7xl px-6 py-24 flex md:flex-row flex-col items-center">
        {/* Left Side (Text) */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-6 font-extrabold text-gray-900 leading-snug">
            <span className="block orange-text sm:text-4xl">
              Book Your
            </span>
            <span className="block text-6xl sm:text-7xl inter text-gray-800">
              Perfect Table
            </span>
            <span className="block mt-2 text-2xl sm:text-3xl font-medium text-gray-600">
              Anytime, Anywhere
            </span>
          </h1>
          <p className="mb-8 text-gray-500 text-base sm:text-lg leading-relaxed tracking-wide">
            Discover and reserve tables at the{" "}
            <span className="font-semibold text-gray-700">
              best restaurants
            </span>{" "}
            in your city. Enjoy a{" "}
            <span className="orange-text font-medium">quick</span>,{" "}
            <span className="orange-text font-medium">easy</span>, and{" "}
            <span className="orange-text font-medium">seamless</span> dining
            experience right from your device.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("reservation")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center cursor-pointer justify-center text-white orange-bg border-0 py-3 px-8 text-lg font-bold"
            >
              Reserve Now
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="hero.png"
            width={700}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

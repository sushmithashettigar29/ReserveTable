import React from 'react';

const ContactSection = React.memo(function ContactSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto max-w-7xl px-6 py-24 flex sm:flex-nowrap flex-wrap gap-12">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="restaurant-map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Your%20Restaurant%20Name&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className=" relative flex flex-wrap py-6 px-8 z-10">
            <div className="lg:w-1/2 px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-wider text-sm uppercase">
                Address
              </h2>
              <p className="mt-2 text-gray-700">
                123 Gourmet Street, Foodie City, FL 12345
              </p>
            </div>
            <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-wider text-sm uppercase">
                Email
              </h2>
              <a
                href="mailto:info@myrestaurant.com"
                className="leading-relaxed font-medium"
              >
                info@myrestaurant.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-wider text-sm uppercase mt-4">
                Phone
              </h2>
              <p className="leading-relaxed text-gray-700">+1 234-567-890</p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="lg:w-1/2 flex flex-col w-full p-8">
          <h1 className="sm:text-4xl text-2xl font-extrabold tracking-tight text-gray-900 mb-4">
            <span className="orange-text">Get in Touch</span>
          </h1>
          <p className="leading-relaxed mb-8 text-gray-600 text-base">
            We'd love to hear from you! Share your feedback, suggestions, or
            questions with us.
          </p>

          {/* Name */}
          <div className="relative mb-5">
            <label
              htmlFor="name"
              className="leading-7 text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe "
              className="w-full bg-white border text-base outline-none py-2 px-3"
            />
          </div>

          {/* Email */}
          <div className="relative mb-5">
            <label
              htmlFor="email"
              className="leading-7 text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              className="w-full bg-white border text-base outline-none py-2 px-3"
            />
          </div>

          {/* Message */}
          <div className="relative mb-6">
            <label
              htmlFor="message"
              className="leading-7 text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              className="w-full bg-white border text-base outline-none py-2 px-3"
            ></textarea>
          </div>

          {/* Button */}
          <button className="text-white orange-bg border-0 py-3 px-6 cursor-pointer text-lg font-bold transition duration-200">
            Send Message
          </button>

          <p className="text-xs text-gray-500 mt-4">
            We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;

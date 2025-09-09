import React from 'react';

function StatsSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-6 py-24 mx-auto">
        {/* Title + Subtitle */}
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
            Why Choose <span className="orange-text">ReserveTable</span>?
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg text-gray-700 leading-relaxed">
            We're helping thousands of users book their favorite restaurants
            effortlessly. Here are some quick stats that highlight our growth
            and trust.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-12 text-center">
          {[
            { number: '2.7K', label: 'Reservations' },
            { number: '1.3K', label: 'Users' },
            { number: '74', label: 'Restaurants' },
            { number: '46', label: 'Cities' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="shadow-sm w-40 h-32 flex flex-col items-center justify-center bg-white hover:shadow-lg transition duration-300"
            >
              <h2 className="title-font font-bold text-4xl red-text">
                {stat.number}
              </h2>
              <p className="mt-2 text-md font-semibold text-gray-500 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

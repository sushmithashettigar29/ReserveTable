import React from 'react'

function StatsSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Why Choose ReserveTable?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We’re helping thousands of users book their favorite restaurants
            effortlessly. Here are some quick stats that highlight our growth
            and trust.
          </p>
        </div>

        {/* Centered flex layout */}
        <div className="flex flex-wrap justify-center gap-16 text-center">
          {[
            { number: "2.7K", label: "Reservations" },
            { number: "1.3K", label: "Users" },
            { number: "74", label: "Restaurants" },
            { number: "46", label: "Cities" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-200 rounded-tl-xl rounded-br-xl w-38 h-28 flex flex-col items-center justify-center hover:bg-amber-300"
            >
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {stat.number}
              </h2>
              <p className="leading-relaxed text-md">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

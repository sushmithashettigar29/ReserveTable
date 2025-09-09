import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Food Blogger',
      image: 'p1.jpg',
      text: 'Absolutely loved the ambiance and the food at this restaurant! The pasta was perfectly cooked and the desserts were heavenly. Highly recommend!',
    },
    {
      id: 2,
      name: 'Michael Smith',
      role: 'Regular Customer',
      image: 'p3.jpg',
      text: 'A wonderful dining experience every time. The staff is friendly, and the dishes are always fresh and delicious. Great place for family dinners!',
    },
    {
      id: 3,
      name: 'Sophia Lee',
      role: 'Food Critic',
      image: 'p2.jpg',
      text: 'The flavors are exceptional, and the restaurant pays attention to every detail. From the appetizers to the desserts, everything is top-notch. Truly a hidden gem!',
    },
  ];

  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        {/* Title */}
        <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight text-gray-900 mb-12 text-center">
          What Our <span className="red-text">Customers</span> Say
        </h1>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white  p-6 text-center hover:shadow-lg transition duration-300"
            >
              {/* Avatar */}
              <img
                alt={t.name}
                className="w-16 h-16 mb-4 object-cover object-center rounded-full mx-auto border-2 border-orange-200 shadow-sm"
                src={t.image}
                loading="lazy"
              />

              {/* Review Text */}
              <p className="leading-relaxed text-sm text-gray-700 italic">
                “{t.text}”
              </p>

              {/* Divider */}
              <span className="inline-block h-1 w-10 rounded bg-orange-400 mt-5 mb-3"></span>

              {/* Name & Role */}
              <h2 className="text-gray-900 font-semibold text-base">
                {t.name}
              </h2>
              <p className="text-gray-500 text-xs uppercase tracking-wide">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

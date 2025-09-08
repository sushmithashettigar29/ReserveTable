import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Food Blogger",
      image: "p1.jpg",
      text: "Absolutely loved the ambiance and the food at this restaurant! The pasta was perfectly cooked and the desserts were heavenly. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Regular Customer",
      image: "p3.jpg",
      text: "A wonderful dining experience every time. The staff is friendly, and the dishes are always fresh and delicious. Great place for family dinners!"
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Food Critic",
      image: "p2.jpg",
      text: "The flavors are exceptional, and the restaurant pays attention to every detail. From the appetizers to the desserts, everything is top-notch. Truly a hidden gem!"
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Customer Reviews
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((t) => (
            <div key={t.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt={t.name}
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={t.image}
                />
                <p className="leading-relaxed">{t.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{t.name}</h2>
                <p className="text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

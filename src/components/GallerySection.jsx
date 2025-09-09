import React from 'react';

function GallerySection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto max-w-7xl px-6 py-24 flex flex-wrap">
        {/* Title & Description */}
        <div className="flex w-full mb-10 flex-wrap leading-snug">
          <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Featured <span className="red-text">Restaurants</span>
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">
            <span className="font-medium">
              Explore our curated selection of top restaurants in different
              cities.
            </span>{' '}
            <span className="italic text-gray-500">
              Find the perfect spot to reserve your table and enjoy a great
              meal.
            </span>
          </p>
        </div>

        {/* Gallery Images */}
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block  shadow-md"
                src="f1.jpg"
                loading="lazy"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block  shadow-md"
                src="f2.jpg"
                loading="lazy"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block  shadow-md"
                src="f3.jpg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block shadow-md"
                src="f4.jpg"
                loading="lazy"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block shadow-md"
                src="f5.jpg"
                loading="lazy"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block shadow-md"
                src="f6.jpg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;

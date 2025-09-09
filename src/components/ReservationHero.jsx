import ReservationSection from './ReservationSection';

function ReservationHero({ restaurantName }) {
  return (
    <section className="text-gray-600 body-font min-h-screen flex flex-col items-center justify-center py-20">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
          Reserve Your <span className="orange-text">Table</span> Easily
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <span className="font-medium">Fill out the form</span> to book a table
          at your favorite restaurant and enjoy a{' '}
          <span className="italic text-gray-500">
            seamless dining experience.
          </span>
        </p>
      </div>

      {/* Content: Image + Form */}
      <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            className="object-cover object-center shadow-md max-h-[480px] w-full hover:shadow-xl transition duration-300"
            alt="reservation"
            src="/f1.jpg"
            loading="lazy"
          />
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full">
            <ReservationSection restaurantName={restaurantName} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationHero;

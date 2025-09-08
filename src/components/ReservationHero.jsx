import ReservationSection from "./ReservationSection";

function ReservationHero({ restaurantName }) {
  return (
    <section className="text-gray-600 body-font min-h-screen flex flex-col items-center justify-center py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Reserve Your Table Easily
        </h1>
        <p className="text-gray-600 text-base">
          Fill out the form to book a table at your favorite restaurant.
        </p>
      </div>

      {/* Content: Image + Form */}
      <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            className="object-cover object-center rounded max-h-[450px] w-full"
            alt="reservation"
            src="/f1.jpg"
          />
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-md">
            <ReservationSection restaurantName={restaurantName} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationHero;

import { useParams } from "react-router-dom";
import ReservationSection from "../components/ReservationSection";

function ReservationPage() {
  const { restaurantName } = useParams(); // get restaurant name from URL

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top full-width header */}
      <div className="w-full mb-6 text-center mt-10">
        <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight text-gray-900">
          Reservation <span className="red-text">Booking</span>
        </h1>
        <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
          Book your table in just a few clicks and enjoy a seamless dining
          experience.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 mx-auto max-w-7xl px-6 mt-4 mb-20">
        {/* Left side - Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/login.png"
            alt="Reserve Table"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <ReservationSection restaurantName={restaurantName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationPage;

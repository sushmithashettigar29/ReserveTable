import { useParams } from "react-router-dom";
import ReservationSection from "../components/ReservationSection";

function ReservationPage() {
  const { restaurantName } = useParams(); // get restaurant name from URL

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top full-width header */}
      <div className="bg-orange-400 w-full p-4">
        <h1 className="font-bold text-2xl text-white text-center">
          Reservation Booking
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 mx-auto max-w-7xl px-6 mt-4">
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

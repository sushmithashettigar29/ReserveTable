import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReservationSection from "../components/ReservationSection";
import restaurantsData from "../data/restaurants.json";

function ReservationPage() {
  const { restaurantName } = useParams();
  const [weather, setWeather] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurantName || "");

  const location = restaurantsData.find(r => r.name === selectedRestaurant)?.location || "";

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        if (data.cod === 200) {
          setWeather({
            temp: data.main.temp,
            desc: data.weather[0].description,
          });
        } else {
          setWeather(null);
        }
      } catch (err) {
        console.error("Weather fetch error:", err);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top full-width header */}
      <div className="w-full mb-6 text-center mt-10">
        <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight text-gray-900">
          Reservation <span className="red-text">Booking</span>
        </h1>
        <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
          Book your table in just a few clicks and enjoy a seamless dining experience.
        </p>

        {/* Weather Info */}
        {weather && location && (
          <div className="mt-4 cream-bg px-4 py-2 rounded shadow inline-block">
            <p className="text-gray-800 font-medium">
              🌤️ Weather in {location} : {weather.temp}°C, {weather.desc}
            </p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 mx-auto max-w-7xl px-6 mb-20">
        {/* Left side - Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/login.png"
            alt="Reserve Table"
            className="w-full h-auto object-contain" loading="lazy"
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <ReservationSection
              restaurantName={selectedRestaurant}
              setRestaurant={setSelectedRestaurant} // optional if you want dropdown updates to weather
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationPage;

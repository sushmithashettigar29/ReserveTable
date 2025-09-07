import { useState } from "react";
import ReservationSection from "./ReservationSection";
import restaurantsData from "../data/restaurants.json"; 

function RestaurantsSection() {

    const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showReservation, setShowReservation] = useState(false);

  // Filter restaurants by search query
  const filteredRestaurants = restaurantsData.filter((res) =>
    res.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleReserve = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowReservation(true);
  };

  const closeReservation = () => {
    setShowReservation(false);
    setSelectedRestaurant(null);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-6 text-center">
          Restaurants
        </h1>

        {/* Search Box */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-2/3 p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Restaurant Grid */}
        <div className="flex flex-wrap -m-4">
          {filteredRestaurants.map((res) => (
            <div key={res.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border p-4 rounded hover:shadow-lg transition relative">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={res.name}
                    className="object-cover object-center w-full h-full block"
                    src={res.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {res.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {res.name}
                  </h2>
                  <p className="mt-1">{res.price}</p>
                </div>

                {/* Favorite Button */}
                <button
                  className={`absolute top-2 right-2 p-2 rounded-full ${
                    favorites.includes(res.id)
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => toggleFavorite(res.id)}
                  title="Add to Favorites"
                >
                  ♥
                </button>

                {/* Reserve Button */}
                <button
                  className="mt-3 w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                  onClick={() => handleReserve(res.name)}
                >
                  Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Modal */}
      {showReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
          <div className="bg-white rounded shadow-lg w-11/12 md:w-2/5 p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeReservation}
            >
              ✕
            </button>
            <ReservationSection restaurantName={selectedRestaurant} />
          </div>
        </div>
      )}
    </section>
  )
}

export default RestaurantsSection

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import restaurantsData from "../data/restaurants.json";

function RestaurantsSection() {
  const [search, setSearch] = useState("");
  const { user, toggleFavorite } = useContext(AuthContext);
  const navigate = useNavigate();

  const filteredRestaurants = restaurantsData.filter((res) =>
    res.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleReserve = (restaurant) => {
    navigate(`/reserve/${restaurant}`);
  };

  return (
    <section className="text-gray-600 body-font w-full bg-gray-50">
      {/* Full-width orange header */}
      <div className="w-full text-center mt-10">
        <h1 className="sm:text-5xl text-3xl font-extrabold tracking-tight text-gray-900">
          Explore Our <span className="orange-text">Restaurants</span>
        </h1>
        <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
          Discover top-rated restaurants and reserve your table with ease.
        </p>
      </div>

      {/* Centered content */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20">
        {/* Search Box */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-2/3 md:w-1/2 p-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredRestaurants.map((res) => (
            <div
              key={res.id}
              className="border  overflow-hidden shadow-sm hover:shadow-md transition duration-300 relative"
            >
              {/* Image */}
              <a className="block relative h-48">
                <img
                  alt={res.name}
                  className="object-cover object-center w-full h-full"
                  src={res.image}
                />
              </a>

              {/* Details */}
              <div className="p-4">
                <h3 className="text-xs text-gray-500 tracking-wide uppercase mb-1">
                  {res.category}
                </h3>
                <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                  {res.name}
                </h2>
                <p className="mt-1 text-sm text-gray-700 font-medium">
                  {res.price}
                </p>

                {/* Reserve Button */}
                <button
                  className="mt-4 w-full orange-bg text-white py-2 px-4 font-medium hover:bg-orange-500 transition"
                  onClick={() => handleReserve(res.name)}
                >
                  Reserve Table
                </button>
              </div>

              {/* Favorite Button */}
              <button
                className={`absolute top-3 right-3 px-2.5 py-1.5 rounded-full text-sm shadow-sm ${
                  user?.favorites?.some((fav) => fav.id === res.id)
                    ? "orange-bg text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => toggleFavorite(res)}
                title="Add to Favorites"
              >
                ♥
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestaurantsSection;

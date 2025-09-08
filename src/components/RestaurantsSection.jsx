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
    navigate(`/reserve/${restaurant}`); // go to reservation page
  };

  return (
    <section className="text-gray-600 body-font w-full">
      {/* Full-width orange header */}
      <div className="bg-orange-400 w-full p-4">
        <h1 className="font-bold text-2xl text-white text-center">
          Restaurants
        </h1>
      </div>

      {/* Centered content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Search Box */}
        <div className="flex justify-center mb-6 mt-4">
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
              <div className="border p-4 hover:shadow-lg transition relative">
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
                  className={`absolute top-2 right-2 px-2 py-1.4 rounded-full ${
                    user?.favorites?.some((fav) => fav.id === res.id)
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white"
                  }`}
                  onClick={() => toggleFavorite(res)}
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
    </section>
  );
}

export default RestaurantsSection;

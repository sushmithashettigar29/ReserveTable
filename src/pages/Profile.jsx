import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Profile() {
  const { user, toggleFavorite } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user)
    return (
      <p className="text-center mt-20 text-gray-600 text-lg">
        You are not logged in.
      </p>
    );

  const handleReserve = (restaurant) => {
    navigate(`/reserve/${restaurant}`);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Profile Header */}
        <div className="flex items-center mb-12">
          {/* Round Avatar */}
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-400 text-white text-2xl font-bold shadow-md">
            {user.name.charAt(0).toUpperCase()}
          </div>

          {/* Name + Email */}
          <div className="ml-5">
            <h1 className="sm:text-3xl text-2xl font-extrabold text-gray-900">
              {user.name}
            </h1>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>

        {/* Favorites Section */}
        <h2 className="sm:text-2xl text-xl font-bold text-gray-900 mb-6 border-b-3 pb-2">
          Your Favorites
        </h2>

        {user.favorites && user.favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {user.favorites.map((fav, idx) => (
              <div
                key={idx}
                className="border overflow-hidden shadow-sm hover:shadow-md transition duration-300 relative"
              >
                {/* Image */}
                <a className="block relative h-48">
                  <img
                    src={fav.image}
                    alt={fav.name}
                    className="object-cover object-center w-full h-full"
                    loading="lazy"
                  />
                </a>

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-xs text-gray-500 tracking-wide uppercase mb-1">
                    {fav.category}
                  </h3>
                  <h2 className="text-md font-semibold text-gray-900 leading-snug">
                    {fav.name} {fav.location ? `- ${fav.location}` : ''}
                  </h2>

                  <p className="mt-1 text-sm red-text font-medium">
                    {fav.price}
                  </p>

                  {/* Reserve Button */}
                  <button
                    className="mt-4 w-full orange-bg text-white py-2 px-4 font-medium cursor-pointer"
                    onClick={() => handleReserve(fav.name)}
                  >
                    Reserve Table
                  </button>
                </div>

                {/* Favorite Toggle */}
                <button
                  className={`cursor-pointer absolute top-3 right-3 px-2.5 py-1.5 rounded-full text-sm shadow-sm ${
                    user?.favorites?.some((f) => f.id === fav.id)
                      ? 'orange-bg text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => toggleFavorite(fav)}
                >
                  ♥
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-base">
            No favorites added yet. Start exploring restaurants and add them to
            your list!
          </p>
        )}
      </div>
    </section>
  );
}

export default Profile;

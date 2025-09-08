import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user)
    return (
      <p className="text-center mt-20 text-gray-600 text-lg">
        You are not logged in.
      </p>
    );

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
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {user.favorites.map((fav, idx) => (
              <li
                key={idx}
                className="bg-white border overflow-hidden"
              >
                {/* Image */}
                <img
                  src={fav.image}
                  alt={fav.name}
                  className="h-40 w-full object-cover"
                />

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {fav.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{fav.category}</p>
                  <p className="text-sm font-medium text-gray-700 mt-2">
                    {fav.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user)
    return (
      <p className="text-center mt-20 text-gray-600">
        You are not logged in.
      </p>
    );

  return (
    <div className="p-6 mx-auto max-w-7xl px-6 py-24">
      {/* Profile Header */}
      <div className="flex items-center mb-8">
        {/* Round Avatar */}
        <div className="h-14 w-14 flex items-center justify-center rounded-full bg-yellow-500 text-white text-xl font-bold shadow">
          {user.name.charAt(0).toUpperCase()}
        </div>

        {/* Name + Email */}
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
      </div>

      {/* Favorites Section */}
      <h2 className="text-xl font-semibold mb-3">Your Favorites</h2>
      {user.favorites && user.favorites.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {user.favorites.map((fav, idx) => (
            <li
              key={idx}
              className="border p-4 bg-white shadow hover:shadow-md transition"
            >
              <img
                src={fav.image}
                alt={fav.name}
                className="h-36 w-full object-cover rounded mb-3"
              />
              <h3 className="font-bold text-lg">{fav.name}</h3>
              <p className="text-sm text-gray-600">{fav.category}</p>
              <p className="text-sm font-medium">{fav.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No favorites added yet.</p>
      )}
    </div>
  );
}

export default Profile;

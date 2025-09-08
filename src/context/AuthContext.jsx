import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) setUser(JSON.parse(loggedUser));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

const toggleFavorite = (restaurant) => {
  if (!user) return;

  const isFavorite = user.favorites?.some((fav) => fav.id === restaurant.id);

  const updatedFavorites = isFavorite
    ? user.favorites.filter((fav) => fav.id !== restaurant.id) // remove
    : [...(user.favorites || []), restaurant]; // add

  const updatedUser = {
    ...user,
    favorites: updatedFavorites,
  };

  setUser(updatedUser);
  localStorage.setItem("user", JSON.stringify(updatedUser));

  // also update in users list
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map((u) =>
    u.email === updatedUser.email ? updatedUser : u
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};


  return (
    <AuthContext.Provider value={{ user, login, logout , toggleFavorite}}>
      {children}
    </AuthContext.Provider>
  );
};

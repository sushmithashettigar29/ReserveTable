import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p className="text-center mt-20 text-gray-600">You are not logged in.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
      <p className="text-gray-700">Email: {user.email}</p>
    </div>
  );
}

export default Profile;

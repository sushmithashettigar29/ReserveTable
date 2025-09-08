import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      login(user);
      navigate("/profile");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Sign In</button>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <Link to="/signup" className="text-yellow-500 font-medium">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;

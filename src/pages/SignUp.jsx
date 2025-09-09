import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((u) => u.email === formData.email);

    if (existingUser) {
      setError('Email already registered!');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    login(formData);
    navigate('/profile');
  };

  return (
    <div className="flex items-center justify-center mx-auto max-w-7xl px-6 py-10">
      {/* Left side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img
          src="login.png"
          alt="Sign Up"
          className="w-full h-auto max-h-screen object-contain"
          loading="lazy"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <h1 className="text-3xl font-bold text-center orange-text">
            Sign Up
          </h1>
          <p className="text-center text-gray-500 text-sm mb-4">
            Create your account to get started.
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none "
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none"
              required
            />
          </div>

          <button className="w-full orange-bg text-white py-2  font-medium">
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="orange-text font-medium">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useState, useEffect } from 'react';
import restaurantsData from '../data/restaurants.json';

const ReservationSection = React.memo(function ReservationSection({
  restaurantName,
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    seats: '',
    restaurant: restaurantName || '',
    time: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prev) => ({ ...prev, restaurant: restaurantName || '' }));
  }, [restaurantName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error while typing
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.contact.trim())
      newErrors.contact = 'Contact number is required';
    if (!formData.seats) newErrors.seats = 'Seats are required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.restaurant)
      newErrors.restaurant = 'Please select a restaurant';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert(`Booking submitted for ${formData.restaurant}!`);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      contact: '',
      seats: '',
      restaurant: '',
      time: '',
    });
    setErrors({});
  };

  return (
    <section id="reservation" className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4"
        >
          {/* Full Name */}
          <div className="relative w-full">
            <label
              htmlFor="fullName"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-white border text-base outline-none py-2 px-3"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border text-base outline-none py-2 px-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="relative w-full">
            <label
              htmlFor="contact"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="+91 9876543210"
              value={formData.contact}
              onChange={handleChange}
              className="w-full bg-white border text-base outline-none py-2 px-3"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}
          </div>

          {/* Seats + Time */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="seats"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Number of Seats
              </label>
              <input
                type="number"
                id="seats"
                name="seats"
                placeholder="2"
                value={formData.seats}
                onChange={handleChange}
                className="w-full bg-white border text-base outline-none py-2 px-3"
              />
              {errors.seats && (
                <p className="text-red-500 text-sm mt-1">{errors.seats}</p>
              )}
            </div>

            <div className="relative flex-grow w-full">
              <label
                htmlFor="time"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-white border text-base outline-none py-2 px-3"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Restaurant Select */}
          <div className="relative w-full">
            <label
              htmlFor="restaurant"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Restaurant
            </label>
            <select
              id="restaurant"
              name="restaurant"
              value={formData.restaurant}
              onChange={handleChange}
              className="w-full bg-white border text-base outline-none py-2 px-3"
            >
              <option value="">Select Restaurant</option>
              {restaurantsData.map((res) => (
                <option key={res.id} value={res.name}>
                  {res.name}
                </option>
              ))}
            </select>
            {errors.restaurant && (
              <p className="text-red-500 text-sm mt-1">{errors.restaurant}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white red-bg border-0 py-2 px-8 text-lg font-bold cursor-pointer"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
});

export default ReservationSection;

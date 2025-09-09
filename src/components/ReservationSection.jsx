import React, { useState, useEffect } from "react";
import restaurantsData from "../data/restaurants.json";

const ReservationSection = React.memo(function ReservationSection({ restaurantName }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    seats: "",
    restaurant: restaurantName || "",
    time: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, restaurant: restaurantName || "" }));
  }, [restaurantName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.restaurant) {
      alert("Please select a restaurant!");
      return;
    }

    // Prepare CSV content
    const headers = ["Full Name", "Email", "Contact", "Seats", "Time"];
    const values = [
      formData.fullName,
      formData.email,
      formData.contact,
      formData.seats,
      formData.time,
    ];
    const csvContent = [headers.join(","), values.join(",")].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    // Replace spaces with _ for file name
    const fileName = `${formData.restaurant.replace(/\s+/g, "_")}_bookings.csv`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Booking submitted! CSV downloaded for restaurant.");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      contact: "",
      seats: "",
      restaurant: "",
      time: "",
    });
  };

  return (
    <section id="reservation"  className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl p-8">
        {/* <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Reserve Your Table Easily
          </h1>
          <p className="text-gray-600 text-base">
            Fill out the form to book a table at your favorite restaurant.
          </p>
        </div> */}

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
              required
            />
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
              required
            />
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
              required
            />
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
                required
              />
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
                required
              />
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
              required
            >
              <option value="">Select Restaurant</option>
              {restaurantsData.map((res) => (
                <option key={res.id} value={res.name}>
                  {res.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white red-bg border-0 py-2 px-8  text-lg font-bold cursor-pointer"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
});

export default ReservationSection;

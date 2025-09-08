import React from "react";
import { ChefHat, Clock, MapPin } from "lucide-react"; // Make sure you have lucide-react installed

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-6 w-6 text-gray-800" />
              <span className="text-xl font-bold">ReserveTable</span>
            </div>
            <p className="text-gray-500">
              Simplifying your dining experience with easy online reservations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Reservations</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Events</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Mon-Thu: 5:00 PM - 10:00 PM
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Fri-Sat: 5:00 PM - 11:00 PM
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Sun: 4:00 PM - 9:00 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                123 Main Street, City
              </li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@reservetable.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 ReserveTable — All Rights Reserved.</p>
          <div className="flex mt-2 justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

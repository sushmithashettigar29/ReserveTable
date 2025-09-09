# 🍽️ ReserveTable - Restaurant Reservation App

A **responsive, multi-featured single-page application** for browsing restaurants, managing favorites, and booking tables. Built with **React** and **Tailwind CSS**, using **localStorage** for authentication and state persistence, and integrating **OpenWeather API** for live weather info.

## 🚀 Live Demo
[Live Demo on Vercel](https://reserve-table-sooty.vercel.app/)  

---

## ⚡ Features

### User Authentication
- Sign Up / Sign In with client-side validation.
- Protected features: Favorites and Reservations are only available for logged-in users.

### Restaurant Listings
- Browse restaurants with names.

### Favorites
- Add or remove restaurants from favorites.
- Favorites persist per user in localStorage.

### Table Reservation
- Reserve a table for a specific restaurant.
- Displays live weather information at the restaurant location.
- Alerts the user when the booking is successfully done.

### Contact / Feedback Form
- Name, email, and message fields with validation.
- Alerts the user when the message is successfully sent.

### Responsive Design
- Fully responsive for mobile and desktop screens.

### Performance Optimized
- Lazy-loaded pages with `React.lazy`.
- Memoized components with `React.memo` where appropriate.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Tailwind CSS  
- **Routing:** React Router v6  
- **State Management:** React Context API, useState hooks  
- **Persistence:** localStorage  
- **API Integration:** OpenWeather API  
- **Code Quality:** ESLint, Prettier  
- **Testing:** Jest, React Testing Library  

---

## 📸 Screenshots

**SignIn Page :**
![SignIn Page](/screenshots/signin.png)

**SignUp Page :**
![SignUp Page](/screenshots/signup.png)

**Hero Section :**
![Hero Section](/screenshots/hero-section.png)

**Statistics Section :** 
![Statistics Section](/screenshots/statistics.png)

**Gallery Section :** 
![Gallery Section](/screenshots/gallery.png)

**Table Reservation Section :** 
![Table Reservation Section](/screenshots/reserve-table-home.png)

**Table Reservation with Weather Prediction :**
![Weather](/screenshots/weather.png)

**Testimonials Section :** 
![Testimonials Section](/screenshots/testimonials.png)

**Contact Section :** 
![Contact Section](/screenshots/contact.png)

**Footer Section :** 
![Footer Section](/screenshots/footer.png)

**Restaurants List Section :** 
![Restaurants List Section](/screenshots/restaurants-list.png)

**Profile Section :** 
![Profile Section](/screenshots/profile.png)

---

## 🚀 Installation

Clone the repository:
```bash
git clone https://github.com/your-username/restaurant-reservation-app.git
cd restaurant-reservation-app
```

Install dependencies:
```bash
npm install
```

Add your OpenWeather API key in .env:
```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

Run the app:
```bash
npm run dev
```
Open http://localhost:5173 to view the app.

---

💡 Usage

- **Sign Up / Sign In**: Create an account to use favorites and reservation features.

- **Favorites**: Click ♥ icon to add/remove favorites.

- **Reservation**: Click “Reserve Table” on a restaurant to navigate to the Reservation page with live weather info.

- **Contact / Feedback**: Fill out the form; inline validation will show errors. On success, an alert confirms the message is sent.
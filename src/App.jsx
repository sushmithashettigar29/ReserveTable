import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ReservationPage from "./pages/ReservationPage";

function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurants" element={<ListingsPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/reserve/:restaurantName" element={<ReservationPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;

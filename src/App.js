import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./shared/context/AuthContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import ViewOrder from "./pages/ViewOrder";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import TechStackPage from "./pages/TechStackPage";

function App() {
  const { user } = useAuthContext();
  console.log("User", user);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/viewOrder" element={<ViewOrder />} />
        <Route path="/techStackPage" element={<TechStackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

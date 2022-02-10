import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../shared/configs/firebase";
import { useAuthContext } from "../shared/context/AuthContext";
import Logo from "../assets/Logo.png";

function Header() {
  const { user } = useAuthContext();
  return (
    <div className="flex items-center justify-between py-3 px-3 bg-blue-400 text-white">
      <div className="logo">
        <img src={Logo} className="h-12" />
      </div>
      <div className="flex items-center gap-3">
        <Link to="/home">Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/menu">Menu</Link>
        &nbsp;&nbsp;&nbsp;
        {user && user?.role !== "admin" && (
          <>
            <Link to="/order">Order</Link>
            &nbsp;&nbsp;&nbsp;
          </>
        )}
        {user && (
          <>
            <Link to="/viewOrder">View Order</Link>
            &nbsp;&nbsp;&nbsp;
          </>
        )}
        <Link to="/contact">Contact</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/techstackpage">Tech Stack Page</Link>
        &nbsp;&nbsp;&nbsp;
        {user && user?.role !== "admin" && (
          <>
            <Link to="/profile">Profile</Link>
            &nbsp;&nbsp;&nbsp;
          </>
        )}
        {user ? (
          <>
            <button onClick={() => signOut(auth)}>Logout</button>{" "}
            &nbsp;&nbsp;&nbsp;
          </>
        ) : (
          <>
            <Link
              className="bg-blue-800 px-4 py-1 rounded-sm text-white"
              to="/login"
            >
              Login/Signup
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

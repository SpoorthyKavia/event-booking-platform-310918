import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import "./Navbar.css";

// PUBLIC_INTERFACE
export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🎟️ EventBooking</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/events">Events</Link></li>
        {isAuthenticated && (
          <li><Link to="/bookings">My Bookings</Link></li>
        )}
        {user && user.is_admin && (
          <li><Link to="/admin">Admin</Link></li>
        )}
      </ul>
      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            <span className="navbar-username">{user?.name || user?.email}</span>
            <Button onClick={logout} variant="outline">Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login"><Button variant="outline">Login</Button></Link>
            <Link to="/register"><Button variant="success">Sign up</Button></Link>
          </>
        )}
      </div>
    </nav>
  );
}

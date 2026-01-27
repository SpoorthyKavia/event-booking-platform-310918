import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import "./App.css";

// Lazy load pages for better code splitting
const Home = lazy(() => import("./pages/Home"));
const Events = lazy(() => import("./pages/Events"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const CreateEvent = lazy(() => import("./pages/CreateEvent"));
const EditEvent = lazy(() => import("./pages/EditEvent"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Bookings = lazy(() => import("./pages/Bookings"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

export default function AppRouter() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="page-centered">Loading...</div>;
  }

  return (
    <div className="app-root">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<div className="page-centered">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/create" element={isAuthenticated ? <CreateEvent /> : <Navigate to="/login" />} />
            <Route path="/events/:id/edit" element={user && user.is_admin ? <EditEvent /> : <Navigate to="/" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bookings" element={isAuthenticated ? <Bookings /> : <Navigate to="/login" />} />
            <Route path="/admin" element={user && user.is_admin ? <AdminDashboard /> : <Navigate to="/" />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

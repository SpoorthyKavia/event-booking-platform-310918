import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container" style={{ maxWidth: 730, margin: "2rem auto" }}>
      <Card>
        <h2>
          Welcome to <span style={{ color: "#3b82f6" }}>Event Booking Platform</span>!
        </h2>
        <p style={{ margin: "1rem 0" }}>
          Browse the latest events, book tickets, or organize your own event.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link to="/events"><Button>Browse Events</Button></Link>
          <Link to="/login"><Button variant="outline">Login</Button></Link>
          <Link to="/register"><Button variant="success">Sign up</Button></Link>
        </div>
      </Card>
    </div>
  );
}

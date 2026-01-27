import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../api/events";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Events() {
  const [search, setSearch] = useState("");
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery(["events", search], () =>
    fetchEvents(search ? { search } : undefined)
  );

  function handleSearch(e) {
    e.preventDefault();
    refetch();
  }

  return (
    <div className="container" style={{ maxWidth: 900, margin: "2rem auto" }}>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <input
          type="search"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            border: "1.2px solid #d1d5db",
            borderRadius: "6px",
            padding: "0.65rem 1rem",
            fontSize: "1rem"
          }}
        />
        <Button type="submit" variant="primary">Search</Button>
        {isAuthenticated && (
          <Button variant="success" type="button" onClick={() => navigate("/events/create")}>
            + Create Event
          </Button>
        )}
      </form>

      {isLoading && <div>Loading events...</div>}
      {error && <div style={{ color: "#EF4444" }}>Error: {error.data?.detail || "Failed to load events"}</div>}

      <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {data?.events?.length === 0 && <div>No events found.</div>}
        {data?.events?.map(event => (
          <Card key={event.id}>
            <Link to={`/events/${event.id}`}>
              <h3 style={{ color: "#3b82f6" }}>{event.title}</h3>
            </Link>
            <div style={{ color: "#64748b" }}>
              {event.date} &bull; {event.location}
            </div>
            <div style={{ margin: "0.6rem 0" }}>{event.short_description || event.description?.slice(0, 100)}</div>
            <Link to={`/events/${event.id}`}>
              <Button variant="outline">View Details</Button>
            </Link>
            {user && user.is_admin && (
              <Button variant="danger" style={{ marginLeft: "0.8rem" }} onClick={() => navigate(`/events/${event.id}/edit`)}>
                Edit
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

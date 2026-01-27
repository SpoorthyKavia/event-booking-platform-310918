import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchEventById } from "../api/events";
import Card from "../components/Card";
import Button from "../components/Button";

export default function EventDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(["event", id], () => fetchEventById(id));

  if (isLoading) return <div>Loading event...</div>;
  if (error) return <div style={{ color: "#EF4444" }}>Error loading event.</div>;

  const event = data?.event || data;

  return (
    <div className="container" style={{ maxWidth: 650, margin: "2rem auto" }}>
      <Card>
        <h2 style={{ color: "#3b82f6" }}>{event.title}</h2>
        <div style={{ color: "#64748b", marginBottom: "0.5rem" }}>{event.date} • {event.location}</div>
        <p>{event.description}</p>
        {/* Booking actions, edit for admin, etc, will go here */}
        <Button variant="primary">Book Ticket</Button>
      </Card>
    </div>
  );
}

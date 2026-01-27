import api from "./client";

// PUBLIC_INTERFACE
export async function fetchEvents(params) {
  // params: { search, category, page, ... }
  const res = await api.get("/events", { params });
  return res.data;
}

// PUBLIC_INTERFACE
export async function fetchEventById(eventId) {
  const res = await api.get(`/events/${eventId}`);
  return res.data;
}

// PUBLIC_INTERFACE
export async function createEvent(event) {
  const res = await api.post("/events", event);
  return res.data;
}

// PUBLIC_INTERFACE
export async function editEvent(eventId, updates) {
  const res = await api.put(`/events/${eventId}`, updates);
  return res.data;
}

// PUBLIC_INTERFACE
export async function deleteEvent(eventId) {
  const res = await api.delete(`/events/${eventId}`);
  return res.data;
}

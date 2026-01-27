import api from "./client";

// PUBLIC_INTERFACE
export async function fetchUsers() {
  const res = await api.get("/admin/users");
  return res.data;
}

// PUBLIC_INTERFACE
export async function enableUser(userId) {
  const res = await api.put(`/admin/users/${userId}/enable`);
  return res.data;
}

// PUBLIC_INTERFACE
export async function disableUser(userId) {
  const res = await api.put(`/admin/users/${userId}/disable`);
  return res.data;
}

// PUBLIC_INTERFACE
export async function deleteUser(userId) {
  const res = await api.delete(`/admin/users/${userId}`);
  return res.data;
}

// PUBLIC_INTERFACE
export async function fetchAllEvents() {
  const res = await api.get("/admin/events");
  return res.data;
}

// PUBLIC_INTERFACE
export async function deleteEvent(eventId) {
  const res = await api.delete(`/admin/events/${eventId}`);
  return res.data;
}

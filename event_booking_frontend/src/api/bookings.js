import api from "./client";

// PUBLIC_INTERFACE
export async function fetchUserBookings() {
  const res = await api.get("/bookings/me");
  return res.data;
}

// PUBLIC_INTERFACE
export async function bookTickets(eventId, payload) {
  // payload: {quantity, ...}
  const res = await api.post(`/events/${eventId}/book`, payload);
  return res.data;
}

// PUBLIC_INTERFACE
export async function mockPayment(bookingId, paymentPayload) {
  // paymentPayload: {card, etc.} -- details ignored by backend (mock)
  const res = await api.post(`/payment/mock/${bookingId}`, paymentPayload);
  return res.data;
}

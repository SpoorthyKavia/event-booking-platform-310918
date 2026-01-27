import api from "./client";

// PUBLIC_INTERFACE
export async function register({ email, password, name }) {
  const res = await api.post("/auth/register", { email, password, name });
  return res.data;
}

// PUBLIC_INTERFACE
export async function login({ email, password }) {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
}

// PUBLIC_INTERFACE
export async function getProfile() {
  const res = await api.get("/users/me");
  return res.data;
}

// PUBLIC_INTERFACE
export async function logout() {
  // Just clear token locally; backend usually doesn't need to revoke
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

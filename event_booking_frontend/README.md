# Event Booking Frontend

This is the modern, responsive React web frontend for the Event Booking System.

## Features

- **Modern UI**: Light theme, accents (#3b82f6 primary, #06b6d4 success), surface #fff, background #f9fafb.
- **Authentication**: Register, login, logout, JWT/refresh token handling.
- **Event Listings**: Browse, search, view details, create/edit events (for organizers/admin).
- **Booking**: Book tickets, select quantity, mock payment, confirmation, view your bookings.
- **Admin**: Dashboard to manage users and events (list, enable/disable, delete).
- **Reusable UI**: Theme-matching Buttons, Inputs, Modals, Cards.
- **State Management**: React Query and lightweight context for auth/server state.
- **API Integration**: All backend requests use a typed client, with error and auth handling.
- **Loading/Error Handling**: Graceful UI for states, form validation (zod).
- **Responsive**: Works on desktop and mobile.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure backend API URL (optional):**
   - Copy `.env.example` to `.env` and adjust `REACT_APP_API_BASE` if not running backend on `http://localhost:3001`.

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

- `src/components/` - UI components (Button, Input, Card, Modal, Navbar, etc)
- `src/pages/` - Route pages (Home, EventDetails, CreateEvent, EditEvent, Login, Register, Bookings, AdminDashboard)
- `src/api/` - API client/wrappers
- `src/context/` - Auth and user context providers
- `src/hooks/` - Custom hooks (e.g. useAuth)
- `src/styles/` - CSS/variables (uses CSS variables, optionally Tailwind for utilities if desired)
- `src/App.js` - App root and router

## Environment Variables

See `.env.example`:

```
REACT_APP_API_BASE=http://localhost:3001
```

## Notes

- If unauthenticated, users are redirected to login for protected routes; admin routes require `is_admin` status.
- All state needed for auth is stored securely in memory/localStorage and attached to backend requests.
- Backend should be running (by default dev port 3001).
- For form validation, `zod` is used.
- React Query handles server cache/state.

## Main Dependencies

- `react@18`
- `react-router-dom`
- `axios`
- `@tanstack/react-query`
- `zod`
- `classnames`
- (optionally) `tailwindcss` for utility CSS

## Backend Integration

This frontend assumes the Event Booking API as specified for backend (FastAPI, port 3001).
Any change in backend API URL should be reflected in `.env`.

---

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// PUBLIC_INTERFACE
export default function useRequireAuth(redirectTo="/login", mustBeAdmin=false) {
  const { user, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate(redirectTo, { replace: true });
      } else if (mustBeAdmin && !user.is_admin) {
        navigate("/", { replace: true });
      }
    }
    // eslint-disable-next-line
  }, [loading, isAuthenticated, mustBeAdmin, user, navigate, redirectTo]);

  return { user, loading, isAuthenticated };
}

import { renderHook } from "@testing-library/react";
import useRequireAuth from "../hooks/useRequireAuth";
import * as AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

jest.mock("../context/AuthContext");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn()
}));

describe("useRequireAuth hook", () => {
  test("redirects to login if not authenticated", () => {
    AuthContext.useAuth.mockReturnValue({ user: null, loading: false, isAuthenticated: false });
    const fn = jest.fn();
    useNavigate.mockReturnValue(fn);

    renderHook(() => useRequireAuth("/login"));
    expect(fn).toHaveBeenCalledWith("/login", { replace: true });
  });
});

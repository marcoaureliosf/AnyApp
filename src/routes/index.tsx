import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { Dashboard } from "../pages/Dashboard";

interface PrivateRoutesProps {
  auth: {
    isAuthenticated: boolean;
  }
}

export function MainRoutes() {
  const PrivateRoutes = ({ auth: { isAuthenticated } }: PrivateRoutesProps) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" element={<PrivateRoutes auth={{ isAuthenticated: true }} />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
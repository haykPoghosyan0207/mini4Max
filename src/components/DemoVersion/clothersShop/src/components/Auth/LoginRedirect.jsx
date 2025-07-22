import React from "react";
import { Navigate } from "react-router-dom";

export default function LoginRedirect({ children }) {
    const token = localStorage.getItem("access_token");
    return token ? <Navigate to="/profile" replace /> : children;
}

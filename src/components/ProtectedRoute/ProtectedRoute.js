import React from "react";
import "./ProtectedRoute.css";
export default function ProductedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return <>{children}</>;
  } else {
    return (
      <div className="route">
        Da biste pristupili sajtu morate da se ulogujete
      </div>
    );
  }
}

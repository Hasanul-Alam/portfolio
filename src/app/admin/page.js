/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import AdminDashboard from "@/components/backend/AdminDashboard";
import LoginPage from "@/components/backend/Login";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const { value, setItem } = useLocalStorage("authStatus", null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    console.log("value changed:", value);
    // Check authentication status
    if (value?.isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setIsLoading(false); // Done loading after checking
  }, [value]);

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <>
        {/* <Demo /> */}
        <AdminDashboard />
      </>
    );
  } else {
    return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }
};

export default Admin;

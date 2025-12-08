/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import AnotherDemo from "@/components/backend/AnotherDemo";
import Demo from "@/components/backend/Demo";
import LoginPage from "@/components/backend/Login";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { useEffect } from "react";

const Admin = () => {
  const { getItem, setItem, value } = useLocalStorage("authStatus", null);
  const handleGetAuthStatus = () => {
    const authStatus = getItem("authStatus");
    console.log("Auth Status from localStorage:", authStatus);
  };
  handleGetAuthStatus();

  const setAuthStatus = () => {
    const status = { isLoggedIn: true, user: "admin" };
    setItem(status);
  };
  useEffect(() => {
    setAuthStatus();
    console.log("value:", value);
  }, []);
  return (
    <>
      {/* <Demo />
      <AnotherDemo /> */}
      <LoginPage />
    </>
  );
};

export default Admin;

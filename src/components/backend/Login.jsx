"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

/* -------------------------- MAIN PAGE -------------------------- */
export default function LoginPage({ onLoginSuccess }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const { setItem } = useLocalStorage("authStatus", null);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validity = new Date();
    validity.setHours(validity.getHours() + 168);
    setIsLoading(true);
    if (
      form.email === "hasanulalam0000@gmail.com" &&
      form.password === "HAP100%&8"
    ) {
      const authData = {
        isLoggedIn: true,
        role: "admin",
        validity: validity.toISOString(),
      };

      setItem(authData);
    }
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div
      className="
      min-h-screen flex items-center justify-center 
      bg-white 
      sm:bg-linear-to-br sm:from-indigo-500 sm:via-purple-500 sm:to-violet-500
      p-4 relative
    "
    >
      {/* Desktop Background Bubbles */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Desktop → Card with full UI */}
      <div className="hidden sm:block relative w-full max-w-md">
        <FormCard
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>

      {/* Mobile → Simple full-screen form */}
      <div className="block sm:hidden w-full">
        <LoginForm
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

/* -------------------------- COMPONENTS -------------------------- */

/* Email Input */
function InputField({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
    w-full px-3 py-3 border border-gray-300 rounded-lg 
    text-gray-900 placeholder:text-gray-400
    focus:border-purple-500 focus:ring-purple-500 focus:ring-1
  "
        placeholder={placeholder}
        required
      />
    </div>
  );
}

/* Password Input */
function PasswordField({ value, show, onChange, onToggle }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="••••••••"
          className="
    w-full px-3 py-3 border border-gray-300 rounded-lg 
    text-gray-900 placeholder:text-gray-400
    focus:border-purple-500 focus:ring-purple-500 focus:ring-1"
          required
        />

        <button
          type="button"
          onClick={onToggle}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {show ? (
            <Eye size={20} color="#4a5565" />
          ) : (
            <EyeOff size={20} color="#4a5565" />
          )}
        </button>
      </div>
    </div>
  );
}

/* Footer (Remember me + Forgot Password) */
function AuthFooter() {
  return (
    <div className="flex justify-between text-sm">
      <label className="flex items-center space-x-2 text-gray-700">
        <input type="checkbox" className="h-4 w-4" />
        <span>Remember me</span>
      </label>
      <a href="#" className="text-indigo-600">
        Forgot password?
      </a>
    </div>
  );
}

/* -------------------------- LOGIN FORM (used in both desktop + mobile) -------------------------- */
function LoginForm({ form, onChange, onSubmit, isLoading }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full">
      <InputField
        label="Email Address"
        type="email"
        value={form.email}
        onChange={(v) => onChange("email", v)}
        placeholder="you@example.com"
      />

      <PasswordField
        value={form.password}
        show={form.showPassword}
        onChange={(v) => onChange("password", v)}
        onToggle={() => onChange("showPassword", !form.showPassword)}
      />

      <AuthFooter />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Don’t have an account?{" "}
        <a href="#" className="text-indigo-600 font-medium">
          Sign up
        </a>
      </p>
    </form>
  );
}

/* -------------------------- DESKTOP CARD UI -------------------------- */
function FormCard({ form, onChange, onSubmit, isLoading }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
          <Lock size={28} color="white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-500 mt-2">Sign in to continue</p>
      </div>

      <LoginForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}

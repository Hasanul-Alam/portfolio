import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Profile
export const getProfile = async () => {
  const { data } = await api.get("/profile");
  return data;
};

// Projects
export const getProjects = async () => {
  const { data } = await api.get("/projects");
  return data;
};

export const getProjectById = async (id) => {
  const { data } = await api.get(`/projects/${id}`);
  return data;
};

// Skills
export const getSkills = async () => {
  const { data } = await api.get("/skills");
  return data;
};

// Experience
export const getExperience = async () => {
  const { data } = await api.get("/experience");
  return data;
};

// Education
export const getEducation = async () => {
  const { data } = await api.get("/education");
  return data;
};

// Contact
export const sendContactMessage = async (formData) => {
  const { data } = await api.post("/contact", formData);
  return data;
};

export default api;

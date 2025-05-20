import axios from "axios";

// const API_URL = "https://api.asilocloud.ink/api/v1";
const API_URL = "http://localhost:5000/api/v1";

// Create axios instance with credentials
export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth API
export const authApi = {
  login: async (data: { id: string; password: string }) =>
    await api.post("/auth/login", data),

  registerOtp: (email: string) => api.get(`/auth/get-otp?email=${email}`),

  register: (data: {
    name: string;
    mobile: string;
    email: string;
    password: string;
    country?: string;
    dialCode: string;
    position: "LEFT" | "RIGHT";
    sponsor: string;
    otp?: string;
    referralCode?: string;
  }) => api.post("/auth/signup", data),

  forgotPassword: (data: { email: string }) =>
    api.post("/auth/forgot-password", data),

  resetPassword: (data: { token: string; password: string }) =>
    api.post("/auth/reset-password", data),

  logout: () => api.post("/auth/logout"),

  me: () => api.get("/user"),
};

// User API
export const userApi = {
  getTree: () => api.get("/tree"),

  createReferralLink: (data: { position: "LEFT" | "RIGHT" }) =>
    api.post("/ref", data),

  getReferralLinkDetails: (code: string) => api.get(`/ref/${code}`),

  getReferralLinks: () => api.get("/ref"),
};

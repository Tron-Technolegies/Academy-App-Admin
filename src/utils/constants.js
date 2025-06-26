export const base_url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/v1"
    : "https://api.tronacademy.in/api/v1";

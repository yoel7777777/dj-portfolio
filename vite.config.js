import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GANTI "dj-portfolio" dgn nama repo kamu
export default defineConfig({
  plugins: [react()],
  base: "/dj-portfolio/",
});

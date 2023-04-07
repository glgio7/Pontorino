import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: true,
	},
	envDir: "./",
	define: {
		"process.env": { VITE_APP_API_KEY: process.env.VITE_APP_API_KEY },
	},
});

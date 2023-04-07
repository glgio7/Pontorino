import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

export default defineConfig({
	plugins: [
		react(),
		replace({
			"process.env.VITE_APP_API_KEY": JSON.stringify(
				process.env.VITE_APP_API_KEY
			),
		}),
	],
});

import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./contexts/AuthContext";

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<BrowserRouter>
			<AuthProvider>
				<AppRoutes />
				<Footer />
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter } from "react-router-dom";
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
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;

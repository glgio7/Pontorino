import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Pricing from "./pages/Pricing";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/pricing"} element={<Pricing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

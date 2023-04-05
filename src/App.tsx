import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Pricing from "./pages/Pricing";
import ClockIn from "./pages/Clockin";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/clockin"} element={<ClockIn />} />
				<Route path={"/pricing"} element={<Pricing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Pricing from "./pages/Pricing";
import ClockIn from "./pages/Clockin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Demo from "./pages/Demo";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/clockin"} element={<ClockIn />} />
				<Route path={"/login"} element={<Login />} />
				<Route path={"/pricing"} element={<Pricing />} />
				<Route path={"/signup"} element={<Signup />} />
				<Route path={"/demo"} element={<Demo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

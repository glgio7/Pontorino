import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalCSS from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<GlobalCSS />
		<App />
	</>
);

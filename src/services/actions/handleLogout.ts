import { auth } from "../config";
import { NavigateFunction } from "react-router-dom";

type handleLogoutProps = {
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
};

const handleLogout = ({ setAuthenticated, navigate }: handleLogoutProps) => {
	auth
		.signOut()
		.then(() => {
			setAuthenticated(false);
			window.alert("Sessão encerrada.");
			navigate("/");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			window.alert(`Error: ${errorCode}. Message: ${errorMessage}`);
		});
};

export default handleLogout;

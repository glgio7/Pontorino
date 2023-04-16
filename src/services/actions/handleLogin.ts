import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { handleLoginProps } from "./types";

const handleLogin = ({
	email,
	password,
	setAuthenticated,
	navigate,
}: handleLoginProps) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((data) => {
			// const user = data.user;
			setAuthenticated(true);
			navigate("/demo");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			window.alert(`Error: ${errorCode}. Message: ${errorMessage}`);
		});
};

export default handleLogin;

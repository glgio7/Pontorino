import { handleRegisterProps } from "./types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

const handleRegister = ({ email, password }: handleRegisterProps) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((data) => {
			window.confirm("Successful. You're in!");
			window.location.href = "/login";
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			window.alert(`Error: ${errorCode}. Message: ${errorMessage}`);
		});
};

export default handleRegister;

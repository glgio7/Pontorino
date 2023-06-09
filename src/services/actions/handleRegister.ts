import { handleRegisterProps } from "./types";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config";

const handleRegister = ({ name, email, password }: handleRegisterProps) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			updateProfile(user, { displayName: name });
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

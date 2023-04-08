import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

const handleRegister = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((data) => {
			const user = data.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			window.alert(`Error: ${errorCode}. Message: ${errorMessage}`);
		});
};

export default handleRegister;

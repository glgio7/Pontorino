import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

const handleLogin = (email: string, password: string) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((data) => {
			const user = data.user;
			// setUser(user.email!);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			window.alert(`Error: ${errorCode}. Message: ${errorMessage}`);
		});
};

export default handleLogin;

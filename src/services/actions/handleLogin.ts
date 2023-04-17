import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { handleLoginProps } from "./types";

const handleLogin = ({
	email,
	password,
	setEmployerName,
	setAuthenticated,
	navigate,
}: handleLoginProps) => {
	signInWithEmailAndPassword(auth, email, password)
		.then(async (data) => {
			const user = data.user;
			setEmployerName(user.displayName!);
			setAuthenticated(true);

			const authToken = await user.getIdToken();

			sessionStorage.setItem("authToken", authToken);
			navigate("/demo");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			window.alert(`Error: ${errorCode}. Message: ${errorMessage}`);
		});
};

export default handleLogin;

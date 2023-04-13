import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { NavigateFunction } from "react-router-dom";

type handleLoginProps = {
	email: string;
	password: string;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
};

// for who wants to test:
// login admin@pontorino.com
// password: 123456

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

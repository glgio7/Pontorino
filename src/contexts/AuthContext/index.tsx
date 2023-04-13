import React, { createContext, useState } from "react";

interface IAuthContext {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	user: string;
	setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthContext>({
	authenticated: false,
	setAuthenticated: () => {},
	user: "",
	setUser: () => {},
});

interface IAuthProvider {
	children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [user, setUser] = useState("");

	const contextValues: IAuthContext = {
		authenticated,
		setAuthenticated,
		user,
		setUser,
	};

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

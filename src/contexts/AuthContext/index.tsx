import React, { createContext, useState } from "react";

interface IAuthContext {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	user: string;
	setUser: React.Dispatch<React.SetStateAction<string>>;
}

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
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

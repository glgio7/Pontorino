import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithCustomToken } from "firebase/auth";
import { auth } from "../../services/config";

interface IAuthContext {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	employerName: string;
	setEmployerName: React.Dispatch<React.SetStateAction<string>>;
}

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [employerName, setEmployerName] = useState("");

	useEffect(() => {
		// Verifica se o usuário está autenticado quando renderiza o componente
		const token = sessionStorage.getItem("authToken");
		if (token) {
			signInWithCustomToken(auth, token)
				.then((data) => {
					const user = data.user;
					setEmployerName(user.displayName!);
					setAuthenticated(true);
				})
				.catch((error) => {
					console.error("Erro ao fazer login com token persistente:", error);
					setAuthenticated(false);
					setEmployerName("");
				});
		}

		// Adiciona um listener para atualizar o estado de autenticação quando o usuário fizer login/logout
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthenticated(true);
				setEmployerName(user.displayName!);
			} else {
				setAuthenticated(false);
				setEmployerName("");
				sessionStorage.removeItem("authToken");
			}
		});

		// Remove o listener quando o componente é desmontado
		return () => unsubscribe();
	}, []);

	const contextValues: IAuthContext = {
		authenticated,
		setAuthenticated,
		employerName,
		setEmployerName,
	};

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

import { NavigateFunction } from "react-router-dom";

export interface FormData {
	name?: string;
	employer?: string;
	code: string;
	pin: string;
	registers: { [key: string]: string };
}

export type handleRegisterProps = {
	name: string;
	email: string;
	password: string;
};

export type handleLoginProps = {
	email: string;
	password: string;
	setEmployerName: React.Dispatch<React.SetStateAction<string>>;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
};

export type handleLogoutProps = {
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
};

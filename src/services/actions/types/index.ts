import { NavigateFunction } from "react-router-dom";

export interface FormData {
	code: string;
	pin: string;
	registers: { [key: string]: string };
}

export type handleRegisterProps = {
	email: string;
	password: string;
};

export type handleLoginProps = {
	email: string;
	password: string;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
};

export type handleLogoutProps = {
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
};

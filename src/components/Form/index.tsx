import { ReactNode } from "react";
import * as S from "./styles";

type FormProps = {
	children: ReactNode;
};
export const validatePassword = (password: string): boolean => {
	const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
	return pattern.test(password);
};

const Form = ({ children }: FormProps) => {
	return <S.Form onSubmit={(e) => e.preventDefault()}>{children}</S.Form>;
};

export default Form;

import { ReactNode } from "react";
import * as S from "./styles";

type FormProps = {
	children: ReactNode;
};

const Form = ({ children }: FormProps) => {
	return <S.Form onSubmit={(e) => e.preventDefault()}>{children}</S.Form>;
};

export default Form;

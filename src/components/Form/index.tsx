import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as S from "./styles";

type FormProps = {
	firstPlaceholder: string;
	secondPlaceholder: string;
	buttonText: string;
};

const Form = ({
	firstPlaceholder,
	secondPlaceholder,
	buttonText,
}: FormProps) => {
	return (
		<S.Form onSubmit={(e) => e.preventDefault()}>
			<input type={"text"} placeholder={firstPlaceholder} />
			<input type={"password"} placeholder={secondPlaceholder} />
			<Button className="handle-form__btn">{buttonText}</Button>
		</S.Form>
	);
};

export default Form;

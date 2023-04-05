import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as S from "./styles";

type FormProps = {
	dailyDate?: string;
	image: string;
	buttonText: string;
	title: string;
};

const Form = ({ dailyDate, image, buttonText, title }: FormProps) => {
	return (
		<S.Form>
			{image === "" ? (
				<h2>
					{dailyDate} - {title}
				</h2>
			) : (
				<Link to={"/"}>
					<img className="logo" src={image} alt="" />
				</Link>
			)}
			<input type={"text"} placeholder={"Employee's code"} />
			<input type={"password"} placeholder={"PIN"} />
			<Button className="handle-form">{buttonText}</Button>
		</S.Form>
	);
};

export default Form;

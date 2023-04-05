import { useState } from "react";
import Button from "../Button";
import * as S from "./styles";

const Form = () => {
	const [currentDate, setCurrentDate] = useState();

	const showCurrentDate = (): void => {
		const currentDate = new Date();
		const hour = currentDate.getHours();
		const minutes = currentDate.getMinutes();
	};

	return (
		<S.Form>
			<h2></h2>
			<input type={"text"} placeholder={"Employee's code"} />
			<input type={"password"} placeholder={"PIN"} />
			<Button className="handle-form">REGISTER</Button>
		</S.Form>
	);
};

export default Form;

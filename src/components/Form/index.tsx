import { useState } from "react";
import Button from "../Button";
import * as S from "./styles";

const dailyDate = new Date();
const day = dailyDate.getDay();
const month = dailyDate.getMonth() + 1;
const year = dailyDate.getFullYear().toString().slice(2, 4);

const Form = () => {
	const [currentDate, setCurrentDate] = useState<string>("Loading...");

	const getCurrentDate = (): void => {
		const currentDate = new Date();
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();
		const seconds = currentDate.getSeconds();

		const update = `${hours < 10 ? "0" + hours : hours}:${
			minutes < 10 ? "0" + minutes : minutes
		}:${seconds < 10 ? "0" + seconds : seconds}`;

		setCurrentDate(update);
	};

	setInterval(getCurrentDate, 1000);

	return (
		<S.Form>
			<h2>
				<>
					{day < 10 ? "0" + day : day}/{month < 10 ? "0" + month : month}/{year}{" "}
					- {currentDate}
				</>
			</h2>
			<input type={"text"} placeholder={"Employee's code"} />
			<input type={"password"} placeholder={"PIN"} />
			<Button className="handle-form">REGISTER</Button>
		</S.Form>
	);
};

export default Form;

import * as S from "./styles";
import Form from "../../components/Form";
import { useState } from "react";

const dailyDate = new Date();
const day = dailyDate.getDay();
const month = dailyDate.getMonth() + 1;
const year = dailyDate.getFullYear().toString().slice(2, 4);

const achievedDate = `${day}/${month}/${year}`;

const ClockIn = () => {
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
		<S.ClockIn>
			<h2>
				{achievedDate} - {currentDate}
			</h2>
			<Form
				firstPlaceholder="Employee's code"
				secondPlaceholder="PIN"
				buttonText={"REGISTER"}
			/>
		</S.ClockIn>
	);
};

export default ClockIn;

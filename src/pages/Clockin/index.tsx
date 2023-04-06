import * as S from "./styles";
import Form from "../../components/Form";
import { useState } from "react";

const dailyDate = new Date();
const day = dailyDate.getDate();
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
			<S.MainContainer>
				<h2>
					{achievedDate} - {currentDate}
				</h2>
				<Form
					firstPlaceholder="Employee's code"
					secondPlaceholder="PIN"
					buttonText={"REGISTER"}
				/>

				<div className="span-container">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
						laboriosam harum deleniti architecto quibusdam quae tenetur qui
						aliquid necessitatibus et corporis molestias quia dolorum quo
						perspiciatis quas nam culpa praesentium.
					</span>
				</div>
			</S.MainContainer>
		</S.ClockIn>
	);
};

export default ClockIn;

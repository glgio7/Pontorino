import { useState } from "react";
import * as S from "./styles";
import Form from "../../components/Form";
import handleTimeClock from "../../services/actions/handleTimeClock";
import Button from "../../components/Button";

const currentDate = new Date()
	.toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "2-digit",
	})
	.replace(/\//g, "-");

const ClockIn = () => {
	const [userCode, setUserCode] = useState<string>("");
	const [userPin, setUserPin] = useState<string>("");
	const [currentTime, setCurrentTime] = useState<string>("Loading...");

	const getCurrentTime = (): void => {
		const currentTime = new Date().toLocaleTimeString("pt-BR", {
			hour12: false,
		});
		setCurrentTime(currentTime);
	};

	setInterval(getCurrentTime, 1000);

	return (
		<S.ClockIn>
			<S.MainContainer>
				<h2>
					{currentDate} - {currentTime}
				</h2>
				<Form>
					<input
						type={"text"}
						placeholder={"Employee's code"}
						required
						onChange={(e) => {
							setUserCode(e.target.value);
						}}
					/>
					<input
						type={"password"}
						placeholder={"PIN"}
						required
						onChange={(e) => {
							setUserPin(e.target.value);
						}}
					/>
					<Button
						className="handle-form__btn"
						onClick={() =>
							handleTimeClock(userCode, userPin, currentDate, currentTime)
						}
					>
						REGISTER
					</Button>
				</Form>

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

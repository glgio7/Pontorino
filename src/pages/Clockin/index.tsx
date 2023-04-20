import { useEffect, useState } from "react";
import { IInfos } from "./types";
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
	const [currentTime, setCurrentTime] = useState<string>("Loading...");

	const [infos, setInfos] = useState<IInfos>({} as IInfos);

	const [rememberUser, setRememberUser] = useState<boolean>(true);

	const savedInfos = localStorage.getItem("infos");

	useEffect(() => {
		localStorage.setItem("infos", JSON.stringify(infos));
	}, [infos]);

	useEffect(() => {
		if (savedInfos) setInfos(JSON.parse(savedInfos));
	}, []);

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
						value={infos.user ? infos.user : ""}
						placeholder={"Employee's code"}
						required
						onChange={(e) => {
							setInfos((prevState) => ({ ...prevState, user: e.target.value }));
						}}
					/>
					<input
						type={"password"}
						value={infos.pin ? infos.pin : ""}
						placeholder={"PIN"}
						required
						onChange={(e) => {
							setInfos((prevState) => ({ ...prevState, pin: e.target.value }));
						}}
					/>
					<div className="check-container">
						<input
							type="checkbox"
							id="check"
							checked={rememberUser}
							onChange={(e) => setRememberUser(e.target.checked)}
						/>
						<label htmlFor="check">Lembrar dados</label>
					</div>
					<Button
						className="handle-form__btn"
						onClick={() => {
							const newStatus = infos.status === "1" ? "0" : "1";
							const savedInfos = {
								user: infos.user,
								pin: infos.pin,
								status: newStatus,
							};

							handleTimeClock(
								infos.user,
								infos.pin,
								currentDate,
								currentTime
							).then(() => {
								setInfos(savedInfos);
							});
						}}
					>
						{infos.status === "1" ? "Sair" : "Entrar"}
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

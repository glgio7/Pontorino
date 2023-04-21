import * as S from "./styles";
import { Link } from "react-router-dom";
import Form, { validatePassword } from "../../components/Form";
import Button from "../../components/Button";
import { useState } from "react";
import handleRegister from "../../services/actions/handleRegister";
import { IUserInfo } from "./types";

const Signup = () => {
	const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

	const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
	const [passwordError, setPasswordError] = useState<string>("");

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const password = e.target.value;
		setUserInfo((prevState) => ({ ...prevState, password: e.target.value }));

		if (!validatePassword(password)) {
			setPasswordError(
				"Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter, and 1 number."
			);
		} else {
			setPasswordError("");
		}
	};

	return (
		<S.Signup>
			<S.AuxContainer>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
					maxime, <strong>maiores esse quos earum ea ex animi?</strong>
				</p>
			</S.AuxContainer>
			<S.MainContainer>
				<div className="logo-container">
					<Link to={"/"}>
						<img
							className="logo"
							src="/img/pontorino-logo.png"
							alt="Pontorino logo"
						/>
					</Link>
				</div>
				<div className="client-wrapper">
					<button className="client-wrapper__btn">Employer</button>
				</div>

				<Form>
					<input
						value={userInfo.name}
						type={"text"}
						placeholder={"Nome e sobrenome"}
						required
						onChange={(e) => {
							setUserInfo((prevState) => ({
								...prevState,
								name: e.target.value,
							}));
						}}
					/>
					<input
						value={userInfo.email}
						type={"text"}
						placeholder={"Email"}
						required
						onChange={(e) => {
							setUserInfo((prevState) => ({
								...prevState,
								email: e.target.value,
							}));
						}}
					/>
					<input
						value={userInfo.password}
						type={"password"}
						placeholder={"Password"}
						required
						onChange={handlePasswordChange}
					/>
					<input
						value={passwordConfirmation}
						type={"password"}
						placeholder={"Confirm your password"}
						required
						onChange={(e) => {
							setPasswordConfirmation(e.target.value);
						}}
					/>
					{passwordError && <p>{passwordError}</p>}
					<Button
						className={
							userInfo.password === passwordConfirmation
								? "handle-form__btn"
								: "handle-form__btn disabled"
						}
						onClick={() => {
							handleRegister(userInfo);
						}}
					>
						REGISTER
					</Button>
				</Form>
				<div className="span-container">
					<span>
						Already have an account? <Link to={"/login"}>Login here.</Link>
					</span>
				</div>
			</S.MainContainer>
			<S.AuxContainer background="/img/modules.png"></S.AuxContainer>
		</S.Signup>
	);
};

export default Signup;

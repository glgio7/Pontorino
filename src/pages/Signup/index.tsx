import * as S from "./styles";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

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
						value={email}
						type={"text"}
						placeholder={"Email"}
						required
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						value={password}
						type={"password"}
						placeholder={"Password"}
						required
						onChange={(e) => {
							setPassword(e.target.value);
						}}
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
					<Button
						className={
							password === passwordConfirmation
								? "handle-form__btn"
								: "handle-form__btn disabled"
						}
						onClick={() => {
							// handleLogin(email, password);
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

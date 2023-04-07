import * as S from "./styles";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import handleLogin from "../../services/actions/handleLogin";

interface ButtonSelected {
	[key: string]: boolean;
}

const Login = () => {
	const [buttonSelected, setButtonSelected] = useState<ButtonSelected>({
		1: true,
		2: false,
		3: false,
	});

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const firstPlaceholder: string =
		buttonSelected[1] === true ? "Email" : "Employer's code";

	const secondPlaceholder: string =
		buttonSelected[1] === true ? "Web Password" : "PIN";

	const buttonText: string = buttonSelected[3] === true ? "REGISTER" : "LOGIN";

	const selectButton = (num: number) => {
		setButtonSelected((prevState) => {
			const newState = { ...prevState };
			Object.keys(newState).forEach((key) => {
				newState[key] = key === num.toString() ? !newState[key] : false;
			});
			return newState;
		});
	};

	return (
		<S.Login>
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
					<Button
						className={
							buttonSelected[1]
								? "client-wrapper__btn active"
								: " client-wrapper__btn"
						}
						onClick={() => selectButton(1)}
					>
						Employer
					</Button>
					<Button
						className={
							buttonSelected[2]
								? "client-wrapper__btn active"
								: " client-wrapper__btn"
						}
						onClick={() => selectButton(2)}
					>
						Collaborator
					</Button>
					<Button
						className={
							buttonSelected[3]
								? "client-wrapper__btn active"
								: " client-wrapper__btn"
						}
						onClick={() => selectButton(3)}
					>
						Clock in
					</Button>
				</div>
				<Form
					firstPlaceholder={firstPlaceholder}
					secondPlaceholder={secondPlaceholder}
					buttonText={buttonText}
					setFirstInput={setEmail}
					setSecondInput={setPassword}
					handleFunction={() => {
						if (buttonSelected[1]) {
							handleLogin(email, password);
						}
					}}
				/>
				<div className="span-container">
					<span>
						<Link to={"/"}>Recover password</Link>
					</span>
					<span>
						Not registered? <Link to={"/signup"}>Register here.</Link>
					</span>
				</div>
			</S.MainContainer>
			<S.AuxContainer background="/img/modules.png"></S.AuxContainer>
		</S.Login>
	);
};

export default Login;

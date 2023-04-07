import * as S from "./styles";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
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
				<Form
					firstPlaceholder={"Email"}
					secondPlaceholder={"Password"}
					thirdPlaceholder={"Confirm your password"}
					buttonText={"REGISTER"}
				/>
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

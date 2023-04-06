import Button from "../Button";
import * as S from "./styles";

type FormProps = {
	firstPlaceholder: string;
	secondPlaceholder: string;
	buttonText: string;
	setFirstInput?: (input: string) => void;
	setSecondInput?: (input: number) => void;
	handleFunction?: () => void;
};

const Form = ({
	firstPlaceholder,
	secondPlaceholder,
	buttonText,
	setFirstInput,
	setSecondInput,
	handleFunction,
}: FormProps) => {
	return (
		<S.Form onSubmit={(e) => e.preventDefault()}>
			<input
				type={"text"}
				placeholder={firstPlaceholder}
				onChange={(e) => {
					if (setFirstInput) {
						setFirstInput(e.target.value);
					}
				}}
			/>
			<input
				type={"password"}
				placeholder={secondPlaceholder}
				onChange={(e) => {
					if (setSecondInput) {
						setSecondInput(Number(e.target.value));
					}
				}}
			/>
			<Button
				className="handle-form__btn"
				onClick={() => handleFunction && handleFunction()}
			>
				{buttonText}
			</Button>
		</S.Form>
	);
};

export default Form;

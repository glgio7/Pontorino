import Button from "../Button";
import * as S from "./styles";

type FormProps = {
	firstPlaceholder: string;
	secondPlaceholder: string;
	thirdPlaceholder?: string;
	buttonText: string;
	setFirstInput?: (input: string) => void;
	setSecondInput?: (input: string) => void;
	handleFunction?: () => void;
};

const Form = ({
	firstPlaceholder,
	secondPlaceholder,
	thirdPlaceholder,
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
						setSecondInput(e.target.value);
					}
				}}
			/>

			{thirdPlaceholder && (
				<input
					type={"password"}
					placeholder={thirdPlaceholder}
					onChange={(e) => {
						if (setSecondInput) {
							setSecondInput(e.target.value);
						}
					}}
				/>
			)}

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

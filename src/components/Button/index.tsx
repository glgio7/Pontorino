import * as S from "./styles";

type ButtonProps = {
	children: string;
	className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
	return (
		<S.ButtonContainer className={className}>{children}</S.ButtonContainer>
	);
};

export default Button;

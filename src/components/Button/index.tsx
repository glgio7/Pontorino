import * as S from "./styles";

type ButtonProps = {
	children: string;
	onClick?: () => void;
	className?: string;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
	return (
		<S.ButtonContainer onClick={onClick} className={className}>
			{children}
		</S.ButtonContainer>
	);
};

export default Button;

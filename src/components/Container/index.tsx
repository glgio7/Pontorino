import StyledContainer from "./styles";

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

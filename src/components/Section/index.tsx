import StyledSection from "./styles";

interface ISectionProps {
	children: React.ReactNode;
}

const Section: React.FC<ISectionProps> = ({ children }) => {
	return <StyledSection>{children}</StyledSection>;
};

export default Section;

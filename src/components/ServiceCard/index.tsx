import StyledServiceCard from "./styles";

type ServiceCardProps = {
	text: string[];
	title: string;
	image: string;
};

const ServiceCard = ({ text, title, image }: ServiceCardProps) => {
	return (
		<StyledServiceCard>
			{text.map((text) => (
				<p key={text}>{text}</p>
			))}
		</StyledServiceCard>
	);
};

export default ServiceCard;

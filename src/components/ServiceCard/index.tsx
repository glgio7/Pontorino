import StyledServiceCard from "./styles";

type ServiceCardProps = {
	text: string[];
	title: string;
	image: string;
};

const ServiceCard = ({ text, title, image }: ServiceCardProps) => {
	return (
		<StyledServiceCard>
			<img src={image} className="icon-card" />
			<h2>{title}</h2>
			{text.map((text) => (
				<li key={text}>
					<span className="material-symbols-outlined">check_circle</span>
					<p>{text}</p>
				</li>
			))}
			<a className="btn">Learn more »</a>
		</StyledServiceCard>
	);
};

export default ServiceCard;

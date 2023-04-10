import Button from "../Button";
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
			<h2 className="card__title">{title}</h2>
			{text.map((text) => (
				<li key={Math.random()} className="list-item">
					<span className="material-symbols-outlined">check_circle</span>
					<p className="card__description">{text}</p>
				</li>
			))}
			<a href="">
				<Button className="btn">Learn more »</Button>
			</a>
		</StyledServiceCard>
	);
};

export default ServiceCard;

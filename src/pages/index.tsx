import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import * as S from "../styles";

const Home = () => {
	return (
		<Container>
			<S.WelcomeContainer>
				<article>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
						architecto?
					</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Blanditiis, nemo.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
						officiis alias molestiae vel facilis quasi dignissimos nulla unde
						voluptatum?
					</p>
					<button>Schedule demonstration</button>
					<button>Try for free »</button>
				</article>
				<img src="/img/welcome.jpg" className="welcome-image" />
				<h6>Lorem ipsum dolor sit amet consectetur.</h6>
			</S.WelcomeContainer>
			<S.SponsorsContainer>
				<img
					src="/img/pattern-logo-1.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
				<img
					src="/img/pattern-logo-2.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
				<img
					src="/img/pattern-logo-3.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
				<img
					src="/img/pattern-logo-2.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
				<img
					src="/img/pattern-logo-1.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
				<img
					src="/img/pattern-logo-3.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
				<img
					src="/img/pattern-logo-2.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
				<img
					src="/img/pattern-logo-1.svg"
					alt="Sponsor"
					className="sponsor-image"
				/>
			</S.SponsorsContainer>
			<S.SectionContainer>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
					voluptatem tempore optio aliquam eius quas animi sapiente ratione
					numquam necessitatibus?
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Exercitationem, dolores.
				</p>

				<div className="cards-container">
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
						]}
						title={""}
						image={""}
					/>
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
						]}
						title={""}
						image={""}
					/>
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
						]}
						title={""}
						image={""}
					/>
				</div>
			</S.SectionContainer>
		</Container>
	);
};
export default Home;

import Container from "../components/Container";
import * as S from "../styles";

const Home = () => {
	return (
		<S.HomeContainer>
			<Container>
				<S.ArticleContainer>
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
				</S.ArticleContainer>
				<img src="/img/welcome.jpg" className="welcome-image" />
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
			</Container>
		</S.HomeContainer>
	);
};
export default Home;

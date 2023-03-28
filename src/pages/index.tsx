import Container from "../components/Container";
import StyledHome, { ArticleContainer } from "../styles";

const Home = () => {
	return (
		<StyledHome>
			<Container>
				<ArticleContainer>
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
				</ArticleContainer>
				<img src="/img/welcome.jpg" className="welcome-image" />
			</Container>
		</StyledHome>
	);
};
export default Home;

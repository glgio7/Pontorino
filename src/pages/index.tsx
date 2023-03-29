import MasterContainer from "../styles";
import ServiceCard from "../components/ServiceCard";
import * as S from "../styles";

const Home = () => {
	return (
		<MasterContainer>
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
			</S.WelcomeContainer>
			<S.SponsorsContainer>
				<h6>Lorem ipsum dolor sit amet consectetur.</h6>
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
				<h2 className="section__title">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
					voluptatem tempore optio aliquam eius quas animi sapiente ratione
					numquam necessitatibus?
				</h2>
				<p className="section__subtitle">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Exercitationem, dolores.
				</p>

				<S.CardsContainer>
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
						]}
						title={"Lorem ipsum"}
						image={"/img/verified.svg"}
					/>
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
						]}
						title={"Ipsum"}
						image={"/img/clock.svg"}
					/>
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
						]}
						title={"Lorem"}
						image={"/img/vacation.svg"}
					/>
				</S.CardsContainer>
			</S.SectionContainer>
			<S.SectionContainer>
				<article>
					<h2>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit vel vitae
						dolore.
					</h2>
					<img
						className="image-content"
						src="/img/image-content.jpg"
						alt="Lorem"
					/>
				</article>
				<ul className="section__list">
					<li>
						<h4>
							<span className="material-symbols-outlined">check_circle</span>
							Lorem ipsum dolor
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							minus error beatae sit laudantium totam.
						</p>
					</li>
					<li>
						<h4>
							<span className="material-symbols-outlined">check_circle</span>
							Lorem ipsum dolor
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							minus error beatae sit laudantium totam.
						</p>
					</li>
					<li>
						<h4>
							<span className="material-symbols-outlined">check_circle</span>
							Lorem ipsum dolor
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							minus error beatae sit laudantium totam.
						</p>
					</li>
					<li>
						<h4>
							<span className="material-symbols-outlined">check_circle</span>
							Lorem ipsum dolor
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							minus error beatae sit laudantium totam.
						</p>
					</li>
					<li>
						<h4>
							<span className="material-symbols-outlined">check_circle</span>
							Lorem ipsum dolor
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							minus error beatae sit laudantium totam.
						</p>
					</li>
					<li>
						<h4>
							<span className="material-symbols-outlined">check_circle</span>
							Lorem ipsum dolor
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							minus error beatae sit laudantium totam.
						</p>
					</li>
				</ul>
			</S.SectionContainer>
		</MasterContainer>
	);
};
export default Home;

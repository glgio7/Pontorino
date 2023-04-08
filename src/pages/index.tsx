import MasterContainer from "../styles";
import ServiceCard from "../components/ServiceCard";
import * as S from "../styles";
import { useRef } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
	const carousel = useRef<HTMLDivElement>(null);

	const handleCarouselScroll = (id: number) => {
		switch (id) {
			case 1:
				carousel.current!.scrollLeft = 0;
				break;
			case 2:
				carousel.current!.scrollLeft =
					carousel.current!.scrollWidth -
					(carousel.current!.scrollWidth / 4) * 3;
				break;
			case 3:
				carousel.current!.scrollLeft =
					carousel.current!.scrollWidth -
					(carousel.current!.scrollWidth / 4) * 2;
				break;
			case 4:
				carousel.current!.scrollLeft =
					carousel.current!.scrollWidth - carousel.current!.scrollWidth / 4;
				break;
		}
	};

	return (
		<MasterContainer>
			<Header />
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
						Lorem ipsum dolor sit amset consectetur adipisicing elit. Ipsa eum
						officiis alias molestiae vel facilis quasi dignissimos nulla unde
						voluptatum?
					</p>
					<Link to={"/demo"}>
						<Button className="primary-btn">Schedule demonstration</Button>
					</Link>
					<Button className="secondary-btn">Try for free »</Button>
				</article>
				<img src="/img/welcome.jpg" className="welcome-image" />

				<S.SponsorsContainer>
					<h6>Lorem ipsum dolor sit amet csonsectetur.</h6>
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
			</S.WelcomeContainer>
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
							"Lorem ipsum dolor sist amet.",
							"Lorem ipsum dolor ssist amet.",
							"Lorem ipsum dolor sa	it amet.",
						]}
						title={"Lorem ipsum"}
						image={"/img/verified.svg"}
					/>
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit wamet.",
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit amet.",
						]}
						title={"Ipsum"}
						image={"/img/clock.svg"}
					/>
					<ServiceCard
						text={[
							"Lorem ipsum dolor sit amet.",
							"Lorem ipsum dolor sit awmet.",
							"Lorem ipsum dolor sit amwet.",
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
				<div className="schedule-container">
					<Link to={"/demo"}>
						<Button className="primary-btn">Schedule demonstration</Button>
					</Link>
				</div>
			</S.SectionContainer>
			<S.SectionContainer>
				<h2 className="section__title">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
					voluptatem tempore optio sapiente.
				</h2>
				<S.Wrapper>
					<div className="wrapper__btn">
						<button onClick={() => handleCarouselScroll(1)}>Lorem optio</button>
						<button onClick={() => handleCarouselScroll(2)}>Enim Aude</button>
						<button onClick={() => handleCarouselScroll(3)}>Modi e Enim</button>
						<button onClick={() => handleCarouselScroll(4)}>Asperiores</button>
					</div>
					<div className="carousel" ref={carousel}>
						<div className="container">
							<div className="container__item">
								<img src="/img/service.jpg" alt="" />
								<img src="/img/service2.jpg" alt="" />
							</div>
							<div className="container__item">
								<img src="/img/service.jpg" alt="" />
								<img src="/img/service2.jpg" alt="" />
							</div>
							<div className="container__item">
								<img src="/img/service.jpg" alt="" />
								<img src="/img/service2.jpg" alt="" />
							</div>
							<div className="container__item">
								<img src="/img/service.jpg" alt="" />
								<img src="/img/service2.jpg" alt="" />
							</div>
						</div>
					</div>
				</S.Wrapper>
				<div className="schedule-container">
					<Link to={"/demo"}>
						<Button className="primary-btn">Schedule demonstration</Button>
					</Link>
				</div>
			</S.SectionContainer>
			<S.BannerContainer>
				<li>
					<h4>+ 10 ipsum dolor sit amet.</h4>
					<span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
						aliquam.
					</span>
				</li>
				<li>
					<h4>+ 25 ipsum pop flip sit amet.</h4>
					<span>
						Loli pop dig dog flip flop tik tok xing dong ling pong ping hong
						king kong
					</span>
				</li>
				<li>
					<h4>+ 50 ipsum flip flop sit amet.</h4>
					<span>
						Loli pop dig dog flip flop tik tok xing dong ling pong ping hong
						king kong
					</span>
				</li>
			</S.BannerContainer>
		</MasterContainer>
	);
};
export default Home;

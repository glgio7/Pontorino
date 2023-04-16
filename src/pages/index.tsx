import MasterContainer from "../styles";
import ServiceCard from "../components/ServiceCard";
import * as S from "../styles";
import { useRef } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
		<>
			<Header />

			<MasterContainer>
				{/* Welcome container  */}

				<S.Container>
					<article>
						<h2>
							Um software simples e intuitivo para DP, com registro de ponto e
							muito mais.
						</h2>
						<p className="p-bold">
							Automatize seus processos de DP com o Pontorino.
						</p>
						<p>
							Faça admissão, controle de ponto, férias e muito mais em um único
							software para sua empresa
						</p>
						<div className="btn-container">
							<Link to={"/demo"} className="btn-container__link">
								<Button className="primary-btn">Agendar demonstração</Button>
							</Link>
							<Link to={"/demo"} className="btn-container__link">
								<Button className="secondary-btn">Teste grátis »</Button>
							</Link>
						</div>
					</article>
					<article>
						<img src="/img/welcome-image.jpg" className="welcome-image" />
					</article>

					<S.Sponsors>
						<h6>Empresas de sucesso que escolheram o Pontorino.</h6>
						<img
							src="/img/sponsors/pattern-logo-1.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
						<img
							src="/img/sponsors/pattern-logo-2.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
						<img
							src="/img/sponsors/pattern-logo-3.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
						<img
							src="/img/sponsors/pattern-logo-2.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
						<img
							src="/img/sponsors/pattern-logo-1.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
						<img
							src="/img/sponsors/pattern-logo-3.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
						<img
							src="/img/sponsors/pattern-logo-2.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
						<img
							src="/img/sponsors/pattern-logo-1.svg"
							alt="Sponsor"
							className="sponsor-image"
						/>
					</S.Sponsors>
				</S.Container>

				{/* Advantages container */}

				<S.Container>
					<h2 className="section__title">
						O software de DP que une tudo que você precisa em um só lugar!
					</h2>
					<p className="section__subtitle">
						Toda a jornada do Departamento Pessoal conectada em poucos cliques
					</p>

					<S.CardsContainer>
						<ServiceCard
							text={[
								"Realize processos admissionais com agilidade.",
								"Facilite a interação com novos colaboradores.",
								"Faça a gestão de associados com facilidade.",
							]}
							title={"Admissão"}
							image={"/img/service-card/verified.svg"}
						/>
						<ServiceCard
							text={[
								"Reduza o tempo no fechamento da folha.",
								"Acompanhe os registros em tempo real.",
								"Gerencie demandas internas e externas.",
							]}
							title={"Controle de ponto"}
							image={"/img/service-card/clock.svg"}
						/>
						<ServiceCard
							text={[
								"Automatize processos manuais no software.",
								"Tenha transparência e segurança nos processos.",
								"Gerencie as férias da sua equipe em poucos cliques.",
							]}
							title={"Férias"}
							image={"/img/service-card/vacation.svg"}
						/>
					</S.CardsContainer>
				</S.Container>
				{/* Services container */}

				<S.Container>
					<article>
						<h2>
							5 motivos para começar a usar o nosso software e economizar tempo
							e dinheiro!
						</h2>
						<img
							className="image-content"
							src="/img/image-content.jpg"
							alt="Lorem"
						/>
					</article>
					<article>
						<ul className="section-list">
							<li className="section-list__item">
								<h4>
									<span className="material-symbols-outlined">
										check_circle
									</span>
									<span>Solução completa</span>
								</h4>
								<p>
									Tenha a jornada do seu departamento pessoal em um só lugar, da
									admissão à demissão.
								</p>
							</li>
							<li className="section-list__item">
								<h4>
									<span className="material-symbols-outlined">
										check_circle
									</span>
									<span>Processos simplificados</span>
								</h4>
								<p>
									Feche a folha de ponto com poucos cliques, aprove solicitações
									de férias e acompanhe os indicadores de jornada direto na
									plataforma.
								</p>
							</li>
							<li className="section-list__item">
								<h4>
									<span className="material-symbols-outlined">
										check_circle
									</span>
									<span>Sistema integrado</span>
								</h4>
								<p>
									Integre o Pontorino aos principais softwares de folha de
									pagamento do mercado com uma API aberta.
								</p>
							</li>
							<li className="section-list__item">
								<h4>
									<span className="material-symbols-outlined">
										check_circle
									</span>
									<span>Relatórios dinâmicos</span>
								</h4>
								<p>
									Gere mais de 20 relatórios de gestão em tempo real para
									auxiliar nas decisões estratégicas.
								</p>
							</li>
							<li className="section-list__item">
								<h4>
									<span className="material-symbols-outlined">
										check_circle
									</span>
									<span>Solução digital e econômica</span>
								</h4>
								<p>
									Garanta mais segurança de dados e respaldo jurídico ao
									modernizar seu DP, economizando até 50% em gastos ao poupar
									papéis e recursos físicos.
								</p>
							</li>
						</ul>
					</article>
					<div className="schedule-container">
						<Link to={"/demo"}>
							<Button>Agendar demonstração</Button>
						</Link>
					</div>
				</S.Container>

				{/* Clients comments carousel */}

				<S.Container>
					<h2 className="section__title">
						O que dizem as pessoas que descomplicaram o DP com o nosso software?
					</h2>
					<S.Wrapper>
						<div className="wrapper__btn">
							<button onClick={() => handleCarouselScroll(1)}>Decisões</button>
							<button onClick={() => handleCarouselScroll(2)}>Gestão</button>
							<button onClick={() => handleCarouselScroll(3)}>
								Personalização
							</button>
							<button onClick={() => handleCarouselScroll(4)}>
								Integração
							</button>
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
							<Button>Agendar demonstração</Button>
						</Link>
					</div>
				</S.Container>
			</MasterContainer>

			{/* Banner container */}

			<S.BannerContainer>
				<li>
					<h4>+ de 10 mil</h4>
					<span>clientes de todo o brasil e no mundo.</span>
				</li>
				<li>
					<h4>+ de 2 milhões</h4>
					<span>de pontos registrados diariamente.</span>
				</li>
				<li>
					<h4>+ de 500 mil</h4>
					<span>vidas envolvidas.</span>
				</li>
			</S.BannerContainer>
			<MasterContainer>
				<S.Container>
					<h2 className="last-container__title">
						Economize até 50% nas suas despesas com DP
					</h2>
					<article className="last-container__article">
						<img className="" src="/img/image-example.jpg" alt="Lorem" />
					</article>
					<article className="last-container__list">
						<ul className="section-list">
							<li className="section-list__item">
								<h4>
									<img
										src="/img/icons/badge.svg"
										className="icon-list"
										alt="badge"
									/>
									<span>Tudo em um só lugar</span>
								</h4>
								<p>
									Concentre toda a jornada do DP em um só lugar, controle de
									ponto, gestão de férias, processos de admissão, gestão
									eletrônica de documentos e mais. Evite o uso de várias
									plataformas simultâneas.
								</p>
							</li>
							<li className="section-list__item">
								<h4>
									<img
										src="/img/icons/schedule.svg"
										className="icon-list"
										alt="badge"
									/>
									<span>Elimine gastos com manutenção</span>
								</h4>
								<p>
									Sem despesas com compra ou conserto de aparelhos. Implemente o
									Tangerino e promova uma economia significativa na sua empresa.
								</p>
							</li>
							<li className="section-list__item">
								<h4>
									<img
										src="/img/icons/book.svg"
										className="icon-list"
										alt="badge"
									/>
									<span>Gaste menos tempo com o fechamento de ponto</span>
								</h4>
								<p>
									Nosso software otimiza esse processo e oferece integração com
									sistemas de folha de pagamento do mercado, deixando o seu DP
									livre para outras tarefas.
								</p>
							</li>
							<li className="section-list__item">
								<h4>
									<img
										src="/img/icons/bell.svg"
										className="icon-list"
										alt="badge"
									/>
									<span>Reduza o uso de papel</span>
								</h4>
								<p>
									Os comprovantes de ponto vão direto para o e-mail do
									colaborador. Menos uso de papel, menos gasto e mais
									consciência ecológica na sua empresa.
								</p>
							</li>
						</ul>
					</article>
					<div className="schedule-container">
						<Link to={"/demo"}>
							<Button>Agendar demonstração</Button>
						</Link>
					</div>
				</S.Container>
			</MasterContainer>
			<Footer />
		</>
	);
};
export default Home;

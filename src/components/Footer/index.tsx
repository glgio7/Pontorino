import { Link } from "react-router-dom";
import Button from "../Button";
import * as S from "./styles";

const Footer = () => {
	return (
		<S.Footer>
			<h4>
				<span>
					Pontorino é o melhor!
					<br />
					<strong> Conheça a solução completa para RH e DP.</strong>
				</span>
				<Link to={"/"}>
					<Button className="learn-btn">Conheça o Pontorino</Button>
				</Link>
			</h4>
			<div className="info-container">
				<a href="">
					<img alt="" src="/img/logo-alt.svg" className="logo-footer" />
				</a>
				<p>
					Nosso software é pioneiro no controle de ponto digital. Somos uma
					solução completa para a gestão da jornada de trabalho, automatizando
					os processos manuais do DP de ponta a ponta.
				</p>
				<p>Telefone: (xx) xxxx-xxxx contato@pontorino.com.br </p>
				<div className="social-links">
					<img src="/img/icons/telegram.svg" alt="" />
					<img src="/img/icons/whatsapp.svg" alt="" />
					<img src="/img/icons/facebook.svg" alt="" />
					<img src="/img/icons/linkedin.svg" alt="" />
				</div>
			</div>
			<ul>
				<li>
					<span>A EMPRESA</span>
					<a href="">Sobre o pontorino</a>
					<a href="">Sobre a empresa</a>
					<a href="">Carreiras</a>
					<a href="">Parcerias</a>
				</li>
				<li>
					<span>ÁREA DO CLIENTE</span>
					<a href="">Login geral</a>
					<a href="">Bater ponto</a>
					<a href="">Login contador</a>
					<a href="">FAQ</a>
				</li>
				<li>
					<span>USANDO O PONTORINO</span>
					<a href="">Admissão</a>
					<a href="">Controle de ponto</a>
					<a href="">Clube de benefícios</a>
					<a href="">Gestão de férias</a>
					<a href="">Funcionalidades</a>
					<a href="">Software de GED</a>
					<a href="">Quanto custa</a>
				</li>
				<li>
					<span>MATERIAIS</span>
					<a href="">Materiais gratuitos</a>
					<a href="">Casos de sucesso</a>
					<a href="">Blog</a>
					<span className="last-span">SEGURANÇA E PRIVACIDADE</span>
					<a href="">Política de privacidade</a>
					<a href="">Termos e condições de uso</a>
				</li>
			</ul>
			<div className="info-container">
				<a href="">
					<img alt="" src="/img/logo-alt.svg" className="logo-footer" />
				</a>
				<p>Baixe já nosso aplicativo no seu smartphone!</p>
				<div className="social-links">
					<a href="" className="app-store">
						<img src="/img/google-play.png" alt="" />
					</a>
					<a href="" className="app-store">
						<img src="/img/apple-store.png" alt="" />
					</a>
				</div>
			</div>
			<h4>
				<p>
					© 2023 Developed by Giovane Azevedo | Controle de ponto, jornada de
					trabalho e gestão de pessoas.
				</p>
			</h4>
		</S.Footer>
	);
};

export default Footer;

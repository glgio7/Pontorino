import HeaderContainer, { Navigation } from "./styles";
import menu from "../../assets/menu.svg";
import close from "../../assets/close-btn.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../Button";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<HeaderContainer>
			<Link to={"/"}>
				<h1>
					<img
						src={"/img/pontorino-logo.png"}
						alt="PontorinoLogo"
						className="logo"
					/>
				</h1>
			</Link>
			<img
				src={menu}
				alt="Logo"
				className="menu"
				onClick={() => setMenuOpen(true)}
			/>
			<Navigation active={menuOpen}>
				<img
					src={close}
					alt="Close"
					className="close-btn"
					onClick={() => setMenuOpen(false)}
				/>
				<ul>
					<Link to={"/about"}>
						<li>Sobre</li>
					</Link>
					<Link to={"/pricing"}>
						<li>Planos</li>
					</Link>
					<Link to={"/"}>
						<li>Parceria</li>
					</Link>
					<Link to={"/"}>
						<li>Blog</li>
					</Link>
				</ul>
				<Link to={"/login"}>
					<Button className="white-btn first">Entrar</Button>
				</Link>
				<Link to={"/clockin"}>
					<Button className="white-btn">Bater ponto</Button>
				</Link>
				<Link to={"/demo"}>
					<Button className="demo-btn">Demonstração</Button>
				</Link>
			</Navigation>
		</HeaderContainer>
	);
};

export default Header;

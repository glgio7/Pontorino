import HeaderContainer, { Navigation } from "./styles";
import menu from "../../assets/menu.svg";
import close from "../../assets/close-btn.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "../Button";
import { AuthContext } from "../../contexts/AuthContext";
import handleLogout from "../../services/actions/handleLogout";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const { authenticated, setAuthenticated } = useContext(AuthContext);
	const navigate = useNavigate();

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
					<Link to={"/"}>
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
					<Button
						className="white-btn first"
						onClick={() => {
							authenticated && handleLogout({ setAuthenticated, navigate });
						}}
					>
						{authenticated ? "Sair" : "Entrar"}
					</Button>
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

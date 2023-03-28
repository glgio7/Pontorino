import HeaderContainer, { Navigation } from "./styles";
import logo from "../../assets/clock-watch.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close-btn.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<HeaderContainer>
			<Link to={"/"} className="logo">
				<h1>
					<img src={logo} alt="Logo" className="logo__image" />
					<span className="logo__title">Pontorino</span>
				</h1>
			</Link>
			<img
				src={menu}
				alt="Logo"
				className="menu"
				onClick={() => setMenuOpen(true)}
			/>
			{
				<Navigation active={menuOpen}>
					<img
						src={close}
						alt="Close"
						className="close-btn"
						onClick={() => setMenuOpen(false)}
					/>
					<ul>
						<Link to={"/about"}>
							<li>About</li>
						</Link>
						<Link to={"/pricing"}>
							<li>Pricing</li>
						</Link>
						<Link to={"/"}>
							<li>Partnership</li>
						</Link>
						<Link to={"/"}>
							<li>Blog</li>
						</Link>
					</ul>
					<button>Login</button>
					<button>Clock in</button>
					<button className="demo-btn">Demonstration</button>
				</Navigation>
			}
		</HeaderContainer>
	);
};

export default Header;

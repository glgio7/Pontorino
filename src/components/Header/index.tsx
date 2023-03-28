import HeaderContainer from "./styles";
import logo from "../../assets/clock-watch.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<HeaderContainer>
			<Link to={"/"}>
				<h1>
					<img src={logo} alt="Logo" className="logo" />
					<span>Pontorino</span>
				</h1>
			</Link>
			<nav>
				<ul>
					<li>Modules</li>
					<Link to={"/pricing"}>
						<li>Pricing</li>
					</Link>
					<li>Partnership</li>
					<li>Blog</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;

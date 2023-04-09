import { Link } from "react-router-dom";
import close from "../../assets/close-btn.svg";
import * as S from "./styles";
import Button from "../../components/Button";
import { useState } from "react";

const servicesList = [
	"Buscar funcionário",
	"Listar funcionários",
	"Adicionar funcionário",
];

const Demo = () => {
	const [menuMobile, setMenuMobile] = useState<boolean>(false);

	return (
		<>
			<S.Header>
				<Link to={"/"}>
					<h1>
						<img
							src={"/img/pontorino-logo.png"}
							alt="PontorinoLogo"
							className="logo"
						/>
					</h1>
				</Link>
				<Button className="user__btn" onClick={() => setMenuMobile(true)}>
					admin@pontorino.com
				</Button>
			</S.Header>
			<S.Demo>
				<nav className={menuMobile ? "active" : ""}>
					<ul>
						<span
							className="material-symbols-outlined close-btn"
							onClick={() => setMenuMobile(false)}
						>
							cancel
						</span>
						{servicesList.map((item) => (
							<li key={item}>
								<Button className="list-item__btn">{item}</Button>
							</li>
						))}
					</ul>
					<h3>
						<img
							src={"/img/pontorino-logo.png"}
							alt="PontorinoLogo"
							className="logo"
						/>
						<span>Todos os direitos reservados.</span>
					</h3>
				</nav>
				<S.Container></S.Container>
			</S.Demo>
		</>
	);
};

export default Demo;

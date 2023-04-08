import { Link } from "react-router-dom";
import * as S from "./styles";
import Button from "../../components/Button";

const servicesList = [
	"Buscar funcionário",
	"Listar funcionários",
	"Adicionar funcionário",
];

const Demo = () => {
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
				<Button className="user__btn">admin@pontorino.com</Button>
			</S.Header>
			<S.Demo>
				<nav>
					<ul>
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

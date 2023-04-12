import * as S from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { listEmployees } from "../../services/database/employees";
import { DocumentData } from "firebase/firestore";

const Demo = () => {
	const [menuMobile, setMenuMobile] = useState<boolean>(false);

	const [list, setList] = useState<DocumentData[]>([]);

	const getEmployees = async () => {
		const employees = await listEmployees();
		setList(employees);
	};

	const servicesList = [
		{
			name: "Buscar funcionário",
			action: () => {},
		},
		{
			name: "Listar funcionários",
			action: getEmployees,
		},
		{
			name: "Adicionar funcionário",
			action: () => {},
		},
	];

	console.log(list);

	return (
		<>
			<S.Header>
				<Link to={"/"}>
					<h1>
						<img
							src={"/img/logo-alt.svg"}
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
							<li key={item.name}>
								<Button className="list-item__btn" onClick={item.action}>
									{item.name}
								</Button>
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

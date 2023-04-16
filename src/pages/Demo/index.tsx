import * as S from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { listEmployees } from "../../services/database/employees";
import { DocumentData } from "firebase/firestore";

const Demo = () => {
	const [menuMobile, setMenuMobile] = useState<boolean>(false);

	const [list, setList] = useState<DocumentData[]>();

	const getEmployees = async () => {
		const employees = await listEmployees();
		setList(employees);
		setMenuMobile(false);
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
			action: () => {
				setList(undefined);
			},
		},
	];

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
				<S.Container>
					{list && (
						<ul>
							<h2>Funcionários</h2>
							{list.map((item) => (
								<li key={item.code}>
									{item.name}
									<button>Ver detalhes</button>
								</li>
							))}
						</ul>
					)}

					{!list && (
						<form>
							<h2>Cadastrar funcionário</h2>
							<label htmlFor="name">Empregador</label>
							<input id="name" name="name" type="text" />
							<label htmlFor="name">Nome Funcionário</label>
							<input id="name" name="name" type="text" />
							<label htmlFor="name">Code</label>
							<input id="name" name="name" type="text" />
							<label htmlFor="name">PIN</label>
							<input id="name" name="name" type="text" />
						</form>
					)}
				</S.Container>
			</S.Demo>
		</>
	);
};

export default Demo;

import * as S from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addEmployee, listEmployees } from "../../services/database/employees";
import { DocumentData } from "firebase/firestore";

const Demo = () => {
	const [menuMobile, setMenuMobile] = useState<boolean>(false);

	const [list, setList] = useState<DocumentData[]>();

	const [employer, setEmployer] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [code, setCode] = useState<string>("");
	const [pin, setPin] = useState<string>("");

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
				setMenuMobile(false);
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
						<form onSubmit={(e) => e.preventDefault()}>
							<h2>Cadastrar funcionário</h2>
							<label htmlFor="employer">Empregador</label>
							<input
								id="employer"
								name="employer"
								type="text"
								value={employer}
								onChange={(e) => setEmployer(e.target.value)}
							/>

							<label htmlFor="name">Nome Funcionário</label>
							<input
								id="name"
								name="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<label htmlFor="code">Code</label>
							<input
								id="code"
								name="code"
								type="text"
								value={code}
								onChange={(e) => setCode(e.target.value)}
							/>

							<label htmlFor="pin">PIN</label>
							<input
								id="pin"
								name="pin"
								type="text"
								value={pin}
								onChange={(e) => setPin(e.target.value)}
							/>

							<Button
								className="handle-form__btn"
								onClick={() => {
									addEmployee(name, employer, code, pin);
								}}
							>
								Cadastrar
							</Button>
						</form>
					)}
				</S.Container>
			</S.Demo>
		</>
	);
};

export default Demo;

import styled from "styled-components";

export const Demo = styled.div`
	background-color: #f0f0f0;

	position: relative;

	display: flex;

	width: 100%;
	min-height: calc(100vh - 80px);

	nav {
		width: 20vw;
		padding: 2rem 1rem;

		background-color: #222;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul,
	li {
		width: 100%;
	}

	.list-item__btn {
		width: 100%;

		border-radius: 0;

		background-color: #32cd32;

		margin: 6px 0;
	}

	.logo {
		height: 24px;
		object-fit: contain;
	}

	span {
		font-size: 0.8rem;
		color: #fff;
	}

	.close-btn {
		display: none;
	}

	@media screen and (max-width: 1024px) {
		nav {
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			transform: translateY(-100%);
			transition: all 500ms;
			z-index: 99;
		}

		nav.active {
			transform: translateY(0);
		}

		.material-symbols-outlined {
			font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
			font-size: 2rem;

			color: #fff;

			cursor: pointer;

			display: block;

			margin-bottom: 1rem;

			width: 32px;
			height: 32px;
		}
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #333;

	padding: 0 2rem;

	position: relative;

	h1 {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 54px;
		width: 240px;
	}

	.logo {
		object-fit: contain;
		height: 36px;
	}

	.user__btn {
		background-color: #4d3180;

		width: 240px;
	}

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		height: auto;
		padding: 1rem 2rem;
	}
`;

export const Container = styled.section`
	width: 100%;
	background-image: url("/img/demo-banner.jpg");
	padding: 2rem;
	overflow-y: auto;
	background-position: center;
	position: relative;

	ul {
		padding: 1rem;

		width: 100%;
		height: 100%;

		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 10px;
	}

	li {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;

		margin-block: 1rem;
		padding: 1rem;

		border-radius: 10px;

		background-color: rgba(255, 255, 255, 0.8);

		width: 100%;
	}

	li button {
		border-radius: 10px;

		padding: 6px 9px;

		background-color: #4d3180;
		color: #fff;
	}

	form {
		padding: 1rem;

		width: 100%;
		height: 100%;

		background-color: rgba(255, 255, 255, 0.75);

		border-radius: 10px;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.input-container {
		width: 80%;

		text-align: left;

		position: relative;
		margin-top: 1rem;
	}

	label {
		display: inline-block;
		margin-bottom: 0.25rem;
		font-weight: bold;
	}

	input {
		background-color: #fff;

		border: #ddd 1px solid;

		width: 100%;
		height: 40px;

		padding: 0 9px;
		margin-bottom: 1rem;

		text-align: left;
	}

	.renew-btn {
		font-size: 1.5rem;

		position: absolute;
		right: 6px;
		bottom: 24px;

		color: #4d3180;

		cursor: pointer;
	}

	.handle-form__btn {
		border-radius: 0;
		width: 80%;

		background-color: #4d3180;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		.renew-btn {
			bottom: 0;
		}
	}
`;

export const EmployeeContainer = styled.div`
	position: absolute;
	top: 1rem;
	bottom: 1rem;
	left: 1rem;
	right: 1rem;
	overflow-y: auto;

	padding: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #4d3180;

	border-radius: 10px;

	.close-employee {
		cursor: pointer;

		font-size: 2rem;

		position: absolute;
		right: 1rem;
		top: 1rem;
	}

	h3 {
		margin-bottom: 1rem;
		color: #fff;
	}

	h4 {
		color: #fff;
		margin-block: 0.25rem;
		font-weight: normal;
		font-size: 0.75rem;
	}

	ul {
		margin-top: 1rem;
		width: 100%;
		height: max-content;
		display: flex;
		flex-wrap: wrap;
	}
`;

import styled from "styled-components";

export const Login = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	background-color: #32cd32;
	background: radial-gradient(#32cd32 0%, #4d3180 150%);

	.logo-container,
	.client-wrapper,
	span {
		background-color: #fff;
		width: 40%;
		z-index: 5;
	}

	.logo {
		margin: 0 auto;
		width: 180px;
	}

	.client-wrapper {
		display: flex;
		padding: 0 2rem;
		justify-content: space-between;
		box-shadow: 0px 10px 0px #fff;
	}
	.client-wrapper__btn {
		width: 20%;
		color: #000;
		background: #ddd;

		font-size: 0.8rem;
		padding: 0;

		border-radius: 0;
	}

	.client-wrapper__btn.active {
		background-color: #32cd32;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		.logo-container,
		.client-wrapper {
			width: 80%;
		}

		.client-wrapper__btn {
			width: 72px;
			height: 30px;
			font-size: 0.6rem;
		}
	}
`;

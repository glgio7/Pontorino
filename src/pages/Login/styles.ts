import styled from "styled-components";

export const Login = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	align-items: center;
	justify-content: space-around;

	background-color: #32cd32;
	background: radial-gradient(#32cd32 0%, #4d3180 150%);

	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;
export const MainContainer = styled.div`
	width: 30%;
	height: 100%;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	.logo-container,
	.client-wrapper,
	.span-container {
		background-color: #fff;
		width: 100%;
		z-index: 5;
	}

	.logo-container {
		border-radius: 12px 12px 0 0;
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
		width: 184px;
		color: #000;
		background: #ddd;

		font-size: 0.65rem;
		padding: 0;
		margin: 0 3px;

		border-radius: 0;
	}

	.client-wrapper__btn.active {
		background-color: #32cd32;
		color: #fff;
	}

	.span-container {
		padding: 0.5rem 0;

		border-radius: 0 0 12px 12px;

		box-shadow: 0px 10px 20px #333;
	}

	.span-container span {
		display: block;

		margin-block: 12px;

		font-size: 0.8rem;
	}

	a {
		transition: all 250ms;
	}

	a:hover {
		color: #32cd32;
	}

	@media screen and (max-width: 1024px) {
		width: 80%;

		.client-wrapper {
			padding: 0 1rem;
		}

		.client-wrapper__btn {
			width: 84px;
			height: 30px;
		}
	}
`;

export const AuxContainer = styled.div<{ background?: string }>`
	width: 30%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-image: ${({ background }) => background && `url('${background}')`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;

	p {
		color: #fff;
		font-size: 2rem;
		width: 80%;
	}

	@media screen and (max-width: 1024px) {
		width: ${({ background }) => (background ? "80%" : "100%")};
		height: ${({ background }) => (background ? "360px" : "auto")};
		padding: 2rem 0;

		p {
			font-size: 1.5rem;
		}
	}
`;

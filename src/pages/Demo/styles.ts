import styled from "styled-components";

export const Demo = styled.div`
	background-color: #f0f0f0;

	position: relative;

	display: flex;

	width: 100%;
	min-height: calc(100vh - 80px);

	nav {
		width: 20vw;
		padding: 2rem;

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

	.list-item__btn {
		width: 240px;

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
		color: #32cd32;
		background: #fff;

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
	background-size: cover;
	background-position: center;
`;

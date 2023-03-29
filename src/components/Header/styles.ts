import styled from "styled-components";

const HeaderContainer = styled.header`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #fff;

	padding: 0 5rem;

	position: fixed;
	top: 0;

	z-index: 99;

	.logo {
		text-align: left;
	}

	h1 {
		display: inline-flex;
		align-items: center;
		height: 54px;
	}

	.logo__image {
		width: 42px;
		height: 42px;
	}

	.logo__title {
		font-size: 2.15rem;
		line-height: 2.15rem;

		font-family: "Alkatra", cursive;
		font-weight: normal;

		align-self: flex-end;

		color: #32cd32;

		margin-left: 0.25rem;

		border-radius: 18px;
	}

	.menu {
		display: none;
	}

	@media screen and (max-width: 1024px) {
		height: auto;
		padding: 1rem 5%;

		.menu {
			cursor: pointer;
			display: block;
			width: 32px;
			height: 32px;
		}
	}
`;

export const Navigation = styled.nav<{ active: boolean }>`
	height: 54px;

	display: flex;
	align-items: center;

	ul {
		display: inline-flex;
	}

	li {
		cursor: pointer;

		font-size: 14px;

		margin: 0 16px;

		transition: all 250ms;

		&:hover {
			color: #32cd32;
		}
	}

	li:first-of-type {
		margin-left: 12px;
	}

	button {
		cursor: pointer;

		height: 44px;

		font-size: 14px;

		&:hover {
			opacity: 0.8;
		}

		min-width: 80px;

		border: 1px solid rgba(0, 0, 0, 0.08);

		border-radius: 0 12px 12px 0;

		background-color: transparent;
		color: #4d3180;
	}

	button:first-of-type {
		border-radius: 12px 0 0 12px;
	}

	.demo-btn {
		min-width: 128px;

		margin-left: 12px;

		border-radius: 12px;
		border: none;

		padding: 6px 15px;
		font-weight: bold;

		background: linear-gradient(
			45deg,
			#4d3180 20%,
			rgba(77, 49, 128, 0.3) 130%
		);
		color: #fff;

		transition: all 150ms;
	}

	.close-btn {
		display: none;
	}

	@media screen and (max-width: 1024px) {
		position: fixed;
		top: calc(80px);
		right: 0;

		z-index: 99;

		width: 256px;
		height: calc(100vh - (80px));

		padding: 0 1rem;

		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		background-color: #fff;

		transform: ${({ active }) =>
			active ? "translateX(0px)" : "translateX(256px)"};
		transition: all 450ms;

		.close-btn {
			cursor: pointer;

			display: block;

			width: 32px;
			height: 32px;

			opacity: 0.75;

			position: absolute;
			right: 1rem;
			top: 1rem;
		}

		ul {
			flex-direction: column;
			align-items: flex-end;

			width: 100%;

			margin-top: 4rem;
		}

		a,
		li {
			text-align: right;

			margin-block: 0.5rem;

			width: 90%;
		}

		button {
			border-radius: 12px;
			margin-block: 0.25rem;
			width: 100%;
		}

		button,
		button:first-of-type {
			border-radius: 12px;
		}

		.demo-btn {
			margin-left: 0;
		}
	}
`;

export default HeaderContainer;

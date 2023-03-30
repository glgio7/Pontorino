import styled from "styled-components";

const MasterContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	background-color: #f0f0f0;

	width: 100%;
	min-height: calc(100vh - 80px);

	margin-top: 80px;

	.primary-btn,
	.secondary-btn {
		height: 54px;
		width: 49.5%;

		margin-top: 2rem;
	}

	.secondary-btn {
		color: #4d3180;
		background: transparent;

		border: 1px solid rgba(0, 0, 0, 0.08);

		&:hover {
			opacity: 1;
			border: 1px solid rgba(77, 49, 128, 0.5);
		}
	}

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const WelcomeContainer = styled.section`
	width: 100%;
	height: 100%;

	padding: 5rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	article {
		width: 40%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	p,
	h2 {
		text-align: left;

		width: 100%;
	}

	h2 {
		font-size: 2.25rem;

		color: #333;
	}

	p {
		margin: 1rem 0;
	}

	p:first-of-type {
		font-weight: 600;
	}
	.welcome-image {
		width: 35%;
		height: 35%;

		aspect-ratio: 1;

		object-fit: cover;
		object-position: left;

		border-radius: 50%;
	}

	@media screen and (max-width: 1024px) {
		width: 100%;

		padding: 5rem 2rem;

		article {
			width: 100%;
		}

		.primary-btn,
		.secondary-btn {
			height: 72px;
			margin-bottom: 4rem;
		}

		.primary-btn {
			width: 64%;
		}

		.secondary-btn {
			width: 35%;
		}

		.welcome-image {
			width: 100%;
		}
	}
`;

export const SponsorsContainer = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	h6 {
		width: 100%;
		color: #333;
	}

	.sponsor-image {
		width: 144px;

		aspect-ratio: 16/9;

		object-fit: contain;
	}
`;

export const SectionContainer = styled.section`
	width: 100%;
	height: 100%;

	padding: 5rem;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	border-radius: 12px;

	.section__title {
		font-size: 1.75rem;

		line-height: 3rem;

		width: 60%;

		color: #333;
	}

	.section__subtitle {
		width: 60%;
		margin-top: 1rem;
	}

	article {
		width: 50%;
		display: flex;
		flex-direction: column;
	}

	article h2 {
		font-size: 2rem;
		line-height: 3rem;
		text-align: left;

		color: #333;

		width: 80%;
	}
	article p {
		width: 80%;
		text-align: left;
	}

	.image-content {
		margin-top: 1rem;

		aspect-ratio: 16/9;
		object-fit: cover;

		width: 100%;

		border-radius: 20px;
	}

	article,
	.section__list {
		margin-top: 2rem;
	}

	.section__list {
		text-align: left;
		padding-left: 5rem;
		width: 50%;
	}

	.section__list li {
		display: inline-flex;
		flex-wrap: wrap;
		margin-block: 1rem;
		align-items: center;
		width: 100%;
	}

	.section__list h4 {
		margin: 0.25rem;
		margin-top: -0.25rem;
		width: 100%;
		display: inline-flex;
		align-items: center;
	}

	.section__list span {
		margin-right: 0.25rem;
	}
	.section__list p {
		margin: 0;
		text-align: left;
		margin-left: 2rem;
		width: 90%;
	}

	.material-symbols-outlined {
		font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
		height: 1.5rem;
		width: 1.5rem;
		color: #32cd32;
		align-self: flex-start;
	}

	.schedule-container {
		width: 40%;
	}
	/* 
	.banner-container {
		
		height: 320px;
		background-color: orange;
	} */

	@media screen and (max-width: 1024px) {
		padding: 5rem 2rem;

		.section__title,
		.section__subtitle {
			width: 100%;
		}

		.section__subtitle {
			width: 90%;
		}

		article {
			width: 100%;
		}

		article h2 {
			width: 100%;
			text-align: center;
		}

		article p {
			text-align: center;
		}

		.section__list {
			padding-left: 0;
			width: auto;
		}

		.section__list h4 {
			margin-top: initial;
		}
		.schedule-container {
			width: 100%;
		}
	}
`;

export const CardsContainer = styled.div`
	padding: 5rem 0;

	width: 100%;

	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Wrapper = styled.div`
	flex-direction: column;

	margin-top: 2rem;

	width: 100%;
	height: fit-content;

	.wrapper__btn {
		position: relative;

		margin: 0 auto;

		display: flex;
		justify-content: space-evenly;

		width: 60%;

		&::after {
			position: absolute;

			content: "";
			background: rgba(0, 0, 0, 0.1);

			height: 1px;
			width: 165%;

			bottom: 0;
			left: -32.5%;
		}
	}

	.wrapper__btn button {
		color: #333;

		position: relative;

		margin-top: 0;

		width: 25%;
		height: 2rem;

		font-weight: normal;

		background: transparent;

		&:hover {
			color: #32cd32;
		}

		&::after {
			opacity: 0;

			position: absolute;

			content: "";
			height: 6px;
			width: 100%;
			bottom: -6px;
			left: 0;
			background: #32cd32;
			transition: all 300ms;
		}
	}

	.wrapper__btn button:focus {
		&::after {
			opacity: 1;
		}
	}

	.carousel {
		width: 100%;

		overflow-x: auto;

		scrollbar-width: none;

		margin-top: 6px;
		padding: 2rem 0rem;
	}

	.container {
		height: 100%;
		display: flex;
		width: max-content;
	}

	.container__item {
		display: flex;
		justify-content: space-around;
		width: calc(100vw - 10rem);
	}
	.container__item img {
		width: 40%;
		aspect-ratio: 16/9;
		object-fit: cover;
		border-radius: 10px;
	}

	@media screen and (max-width: 1024px) {
		.wrapper__btn {
			width: 100%;

			&::after {
				max-width: 100%;
				left: 0;
				bottom: -18px;
			}
		}
		.wrapper__btn button {
			font-size: 0.8rem;

			&::after {
				bottom: -18px;
			}
		}
		.container__item {
			display: flex;
			justify-content: space-around;
			width: calc(100vw - 5rem);
		}

		.container__item img {
			width: 45%;
			aspect-ratio: 9/16;
			object-fit: cover;
		}
	}
`;

export const BannerContainer = styled.ul`
	width: 100%;
	height: 320px;

	background-image: url("/img/banner.jpg");
	background-size: cover;
	background-repeat: no-repeat;

	padding: 2rem 5rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	li {
		width: 30%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: #fff;
	}

	li h4 {
		font-size: 2.5rem;
		font-weight: bold;

		&::first-line {
			color: #32cd32;
			text-shadow: 0px 0px 10px #000;
		}
	}

	li span {
		font-size: 0.85rem;
		margin-top: 0.15rem;
	}

	@media screen and (max-width: 1024px) {
		height: auto;
		flex-direction: column;

		li {
			width: 100%;
			margin-block: 1rem;
		}
	}
`;

export default MasterContainer;

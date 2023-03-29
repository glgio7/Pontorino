import styled from "styled-components";

const MasterContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	background-color: #f0f0f0;

	width: 100%;
	min-height: calc(100vh - 80px);

	padding: 5rem;
	margin-top: 80px;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;

		padding: 5rem 2rem;
	}
`;

export const WelcomeContainer = styled.section`
	width: 100%;
	height: 100%;

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

	button {
		cursor: pointer;

		height: 54px;
		width: 48%;

		font-size: 1rem;
		line-height: 1rem;
		font-weight: 700;

		padding: 0 6px;

		border-radius: 12px;

		margin-top: 2rem;

		background: linear-gradient(
			45deg,
			#4d3180 20%,
			rgba(77, 49, 128, 0.3) 130%
		);
		color: #fff;

		transition: all 150ms;

		&:hover {
			opacity: 0.8;
		}

		&:last-of-type {
			color: #4d3180;
			background: transparent;

			border: 1px solid rgba(0, 0, 0, 0.08);

			&:hover {
				opacity: 1;
				border: 1px solid rgba(77, 49, 128, 0.5);
			}
		}
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

		article {
			width: 100%;
		}

		button {
			width: 62%;
			height: 72px;
			margin-bottom: 4rem;

			&:last-of-type {
				width: 35%;
			}
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

	@media screen and (max-width: 1024px) {
		padding: 1rem;

		width: 90%;

		position: relative;
	}
`;

export const SectionContainer = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	border-radius: 12px;

	/* background: linear-gradient(0deg, #4d3180 20%, rgba(77, 49, 128, 0.3) 130%); */

	padding: 5rem 0;

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

	.image-content {
		margin-top: 1rem;

		aspect-ratio: 16/9;
		object-fit: cover;

		width: 100%;

		border-radius: 20px;
	}

	.section__list {
		text-align: left;
		padding-left: 1rem;
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

	@media screen and (max-width: 1024px) {
		padding: 2rem 0;

		h2 {
			width: 80%;
		}

		p {
			width: 60%;
		}

		article {
			width: 100%;
		}

		article h2 {
			width: 100%;
			text-align: center;
		}

		.section__list {
			width: auto;
		}

		.section__list h4 {
			margin-top: initial;
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

export default MasterContainer;

import styled from "styled-components";

export const HomeContainer = styled.div`
	.welcome-image {
		width: 35%;
		height: 35%;

		aspect-ratio: 1;

		object-fit: cover;
		object-position: left;

		border-radius: 50%;
	}

	@media screen and (max-width: 900px) {
		.welcome-image {
			width: 100%;
		}
	}
`;

export const ArticleContainer = styled.article`
	width: 40%;
	height: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	p,
	h2 {
		text-align: left;

		width: 100%;
	}

	h2 {
		font-size: 2rem;

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
		}
	}

	@media screen and (max-width: 900px) {
		width: 100%;

		p,
		h2 {
			text-align: center;
		}

		button {
			width: 62%;
			height: 72px;
			margin-bottom: 4rem;

			&:last-of-type {
				width: 35%;
			}
		}
	}
`;

export const SponsorsContainer = styled.div`
	height: 80px;
	width: 100%;

	display: flex;
	justify-content: center;

	.sponsor-image {
		width: 144px;

		aspect-ratio: 16/9;

		object-fit: contain;
	}

	@media screen and (max-width: 900px) {
		overflow-x: auto;

		scrollbar-width: none;

		position: relative;

		&:after {
			position: sticky;

			content: "»»";
			font-weight: bold;

			right: 3px;
		}
	}
`;

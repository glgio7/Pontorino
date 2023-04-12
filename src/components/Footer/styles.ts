import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;

	background-color: #32cd32;
	background: radial-gradient(#4d3180 0%, #000 150%);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	padding: 5rem;
	padding-bottom: 0;

	h4 {
		display: inline-flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 92px;
		margin-bottom: 5rem;
		&:last-child {
			margin-bottom: 0;
		}
	}

	h4 span {
		color: #ccc;
		font-size: 1.75rem;
		line-height: 2.5rem;
	}

	h4 strong {
		color: #fff;
	}

	h4 a {
		width: auto;
	}

	h4 p {
		width: 100%;
		color: #fff;
		font-size: 0.8rem;
		text-align: center;
	}
	.learn-btn {
		height: 60px;
		width: 192px;
		color: #4d3180;
		background: #fff;
	}

	.info-container {
		flex-direction: column;
		display: flex;
		align-items: flex-start;
		width: 20%;
		height: 100%;
		color: #fff;
	}

	.info-container a {
		margin-block: 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		width: 60%;
		height: 100%;
	}
	li {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		width: 50%;
		height: 100%;

		color: #fff;

		margin-top: 2rem;
	}

	li:first-child,
	li:nth-child(2) {
		margin-top: 0rem;
	}

	a,
	p {
		text-align: left;
		width: 80%;
		margin-block: 12px;
	}

	a:hover {
		transition: all 300ms;
		opacity: 0.8;
	}

	li span {
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.last-span {
		margin-top: 2rem;
	}

	.social-links {
		margin-block: 12px;
		display: flex;
		width: 80%;
		gap: 6px;
	}

	.social-links img {
		width: 30px;
	}

	.logo-footer {
		width: 180px;
	}

	.app-store {
		width: 45%;
		height: 48px;
	}

	.app-store img {
		object-fit: contain;
		width: 100%;
		height: 48px;
	}

	@media screen and (max-width: 1024px) {
		padding: 2rem;
		flex-direction: column;

		h4 {
			flex-wrap: wrap;
			justify-content: flex-start;
			width: 100%;
		}
		span {
			text-align: left;
		}

		.info-container {
			margin-top: 2rem;
			width: 100%;
		}

		ul {
			flex-direction: column;
		}

		li:first-child,
		li:nth-child(2) {
			margin-top: 2rem;
		}

		li {
			width: 100%;
		}

		.last-span {
			text-align: left;
		}

		p {
			width: 100%;
		}

		h4 {
			margin-bottom: 5rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;

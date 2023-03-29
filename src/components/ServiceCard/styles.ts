import styled from "styled-components";

const StyledServiceCard = styled.ul`
	width: 25%;

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #fff;

	border-radius: 10px;
	box-shadow: 3px 6px 10px #444;

	padding: calc(1rem + 27px) 1rem;

	position: relative;

	.card__title,
	.card__description {
		width: 100%;
		text-align: center;
	}

	.icon-card {
		width: 54px;
		height: 54px;

		position: absolute;
		top: -27px;

		padding: 0.5rem;

		object-fit: cover;

		border-radius: 50%;

		background-color: #32cd32;
	}

	li {
		display: inline-flex;
		margin-block: 1rem;
		align-items: center;
		width: 100%;
	}

	.material-symbols-outlined {
		font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
		height: 1.5rem;
		width: 1.5rem;
		color: #32cd32;
		align-self: flex-start;
	}

	h2 {
		min-height: 5rem;
	}

	p {
		margin: 0;
		margin-left: 0.25rem;
		font-size: 1rem;
	}

	.btn {
		cursor: pointer;

		height: 54px !important;

		display: flex;
		align-items: center;

		align-self: flex-start;

		font-size: 1rem;
		line-height: 1rem;
		font-weight: bold;

		padding: 0 15px;

		border-radius: 12px;

		margin-top: 2rem;

		color: #4d3180;
		background: transparent;

		border: 1px solid rgba(0, 0, 0, 0.08);

		transition: all 300ms;

		&:hover {
			border: 1px solid rgba(77, 49, 128, 0.5);
		}
	}

	@media screen and (max-width: 1024px) {
		width: 90%;

		align-items: flex-start;

		margin: 2rem 0;

		padding: inherit 0;

		li {
			padding: 0 1rem;
		}

		.icon-card {
			align-self: center;
		}

		.card__description {
			text-align: left;
		}

		.btn {
			align-self: center;
		}
	}
`;

export default StyledServiceCard;

import styled from "styled-components";

const StyledServiceCard = styled.ul`
	width: 25%;

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #fff;
	background-image: url("/img/service-card/service-card.jpg");
	background-size: cover;
	background-position: center;

	border-radius: 10px;
	box-shadow: 3px 6px 10px #444;

	padding: calc(1rem + 27px) 1rem;

	position: relative;

	.icon-card {
		width: 54px;
		height: 54px;

		position: absolute;
		top: -27px;

		padding: 0.75rem;

		object-fit: contain;

		border-radius: 50%;

		background-color: #5e3185;
	}

	.card__title,
	.card__description {
		width: 100%;

		color: #fff;
	}

	.card__title {
		font-size: 1.5rem;
		text-align: center;
		line-height: 3rem;

		background-color: rgba(0, 0, 0, 0.8);

		padding: 9px;

		border-radius: 10px;
	}

	.card__description {
		margin-left: 6px;
	}

	.list-item {
		display: inline-flex;
		align-items: center;
		justify-content: space-around;

		background-color: rgba(0, 0, 0, 0.5);

		margin-block: 6px;
		padding: 9px;

		border-radius: 10px;

		width: 100%;
	}

	.material-symbols-outlined {
		font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
		height: 1.5rem;
		color: #32cd32;
	}

	a {
		align-self: flex-start;
	}

	.btn {
		color: #4d3180;
		background: #fff;

		margin-block: 6px;

		border: 1px solid rgba(0, 0, 0, 0.08);

		transition: all 300ms;

		&:hover {
			opacity: 1;
			border: 1px solid #4d3180;
		}
	}

	@media screen and (max-width: 1024px) {
		width: 100%;

		align-items: flex-start;

		margin: 2rem 0;

		padding: inherit 0;

		.icon-card {
			align-self: center;
		}

		li {
			padding: 0;
		}

		a {
			align-self: center;
		}
	}
`;

export default StyledServiceCard;

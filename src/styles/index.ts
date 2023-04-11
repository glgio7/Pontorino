import styled from "styled-components";

const MasterContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	background-color: #f0f0f0;

	width: 100%;
	min-height: calc(100vh - 80px);

	padding: 0 5rem;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		padding: 0 2rem;
	}
`;

export const Container = styled.section`
	width: 100%;
	height: 100%;

	padding: 5rem 0;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	article {
		width: 50%;

		display: flex;
		flex-direction: column;
	}

	h2,
	p {
		text-align: left;

		width: 80%;
	}

	h2 {
		font-size: 2.25rem;

		color: #333;
	}

	p {
		margin: 1rem 0;
	}

	.p-bold {
		font-weight: 600;
	}

	.welcome-image {
		width: 65%;

		aspect-ratio: 1;

		object-fit: cover;
		object-position: left;

		border-radius: 50%;

		margin: auto;
	}

	.btn-container {
		width: 100%;

		display: flex;
	}

	.btn-container__link {
		width: 40%;
		height: 54px;

		margin-top: 2rem;
	}

	.primary-btn,
	.secondary-btn {
		width: 98%;
		height: 100%;
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

	/* ///////// SECOND PART /////////  */

	.section__title {
		font-size: 1.75rem;

		line-height: 2.75rem;

		width: 60%;

		margin: 0 auto;
		text-align: center;

		color: #333;
	}

	.section__subtitle {
		width: 60%;

		margin: 0 auto;
		font-weight: 300;
		margin-top: 1rem;

		text-align: center;
	}

	.image-content {
		margin-top: 1rem;
		padding-right: 1rem;

		aspect-ratio: 16/9;
		object-fit: cover;

		width: 100%;

		border-radius: 0 100% 0 50%;
	}

	.section-list {
		height: 100%;
		flex-direction: column;
		display: flex;
		justify-content: center;

		padding-left: 1rem;
	}

	.section-list__item {
		display: flex;
		flex-wrap: wrap;
	}

	.section-list__item h4 {
		display: inline-flex;
		align-items: center;
		font-size: 1.2rem;
	}
	.section-list__item span {
		margin-left: 2rem;
	}

	.material-symbols-outlined {
		font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
		height: 1.5rem;
		width: 1.5rem;
		color: #4d3180;
	}

	.section-list__item p {
		margin-left: 5.5rem;
	}

	.schedule-container {
		width: 100%;
		height: 54px;
		margin-block: 1rem;
	}

	.schedule-container button {
		height: 100%;
	}

	.last-container__title {
		text-align: center;
		width: 100%;
		margin-bottom: 4rem;
	}

	.last-container__article {
		width: 40%;
	}

	.last-container__list {
		width: 60%;
	}

	.last-container__list ul {
		flex-direction: row;
		flex-wrap: wrap;
	}
	.last-container__list li {
		width: 50%;
	}

	.last-container__list h4 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.last-container__list span {
		margin-top: 6px;
		width: 80%;
		text-align: left;
		margin-left: 0;
	}
	.last-container__list p {
		margin-left: 0;
	}

	.icon-list {
		width: 48px;
	}

	@media screen and (max-width: 1024px) {
		width: 100%;
		padding: 2rem 0;

		article {
			width: 100%;
		}

		.btn-container__link {
			height: 72px;
			width: 100%;
			margin-bottom: 2rem;
		}

		.welcome-image {
			width: 90%;
		}

		.section__title {
			width: 100%;
			text-align: left;
			line-height: 2.5rem;
		}

		.section__subtitle {
			text-align: left;
			margin: 0;
			width: 100%;
			margin-top: 1rem;
		}

		.image-content {
			margin-top: 1rem;
			padding-right: 1rem;

			aspect-ratio: 16/9;
			object-fit: cover;

			width: 100%;

			border-radius: 0 0 50% 50%;
		}

		.section-list {
			margin-top: 1rem;
		}

		.section-list__item span {
			margin-left: 3px;
		}

		.section-list__item p {
			margin-left: calc(1.75rem + 3px);
		}

		.last-container__article {
			width: 100%;
		}

		.last-container__list {
			width: 100%;
		}

		.last-container__list li {
			width: 100%;
		}

		.last-container__list span {
			margin-left: 0;
			width: 100%;
		}
		.last-container__list p {
			margin-left: 0;
		}
	}
`;

export const Sponsors = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	h6 {
		width: 100%;

		margin-top: 1rem;

		color: #333;
	}

	.sponsor-image {
		width: 144px;

		aspect-ratio: 16/9;

		object-fit: contain;
	}

	@media screen and (max-width: 1024px) {
		h6 {
			margin-top: 2rem;
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
		padding-bottom: 0;
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

		font-size: 1rem;

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
		padding-top: 2rem;
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
			font-size: 0.65rem;

			&::after {
				bottom: -18px;
			}
		}
		.container__item {
			display: flex;
			flex-direction: column;
			width: calc(100vw - 4rem);
			gap: 6px;
		}

		.container__item img {
			width: 100%;
			aspect-ratio: 16/9;
			object-fit: cover;
		}
	}
`;

export const BannerContainer = styled.ul`
	width: 100%;
	height: 320px;

	background-image: url("/img/banner.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	padding: 0rem 5rem;

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

		&::first-letter {
			color: #fff;
		}
	}

	li span {
		font-size: 0.85rem;

		margin-top: 0.15rem;

		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;

		border-radius: 12px;

		padding: 9px 15px;
	}

	@media screen and (max-width: 1024px) {
		height: auto;
		flex-direction: column;
		padding: 0 2rem;

		li {
			width: 100%;
			margin-block: 1rem;
		}
	}
`;

export default MasterContainer;

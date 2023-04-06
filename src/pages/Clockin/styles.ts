import styled from "styled-components";

export const ClockIn = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	background-color: #32cd32;
	background: linear-gradient(-125deg, #4d3180 20%, #32cd32 100%);

	h2 {
		font-size: 1rem;
		line-height: 1.25rem;

		cursor: pointer;

		width: 40%;

		margin-top: 20px;
		padding: 12px;

		border-radius: 12px 12px 0 0;

		background-color: #444;
		color: #32cd32;

		position: relative;

		z-index: 5;

		&:hover {
			::after {
				top: -48px;

				opacity: 1;

				background-color: #fff;
			}
		}
	}

	h2::after {
		content: "Horário de Brasília";

		background-color: #444;

		padding: 3px 6px;

		border-radius: 12px;

		position: absolute;
		top: 0;
		left: 0;
		right: 0;

		opacity: 0;

		transition: all 300ms;
	}
	@media screen and (max-width: 1024px) {
		width: 80%;
	}
`;

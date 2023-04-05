import styled from "styled-components";

export const Form = styled.form`
	width: 30%;
	height: 60%;

	background-color: #fff;

	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 20px;

	position: relative;

	box-shadow: 10px 10px 20px #333;

	h2 {
		font-size: 1rem;
		line-height: 1.25rem;

		cursor: pointer;

		width: 80%;

		margin-top: 20px;
		padding: 12px;

		border-radius: 12px;

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

	input {
		width: 80%;
		margin-block: 6px;
		height: 40px;
		background-color: #ddd;
	}

	.handle-form {
		width: 80%;

		border-radius: 0;

		background-color: #32cd32;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		width: 80%;
		height: 480px;
	}
`;

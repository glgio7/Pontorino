import styled from "styled-components";

export const Form = styled.form`
	width: 100%;

	background-color: #fff;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 2rem;

	gap: 10px;

	position: relative;

	input,
	.handle-form__btn {
		width: 240px;
	}
	.handle-form__btn.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	input {
		height: 40px;
		background-color: #ddd;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
	}

	p {
		color: #ff0000;

		font-size: 0.75rem;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;

		width: 240px;
	}

	.handle-form__btn {
		border-radius: 0;

		background-color: #32cd32;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		padding: 1rem;
		input,
		.handle-form__btn {
			width: 100%;
		}
	}
`;

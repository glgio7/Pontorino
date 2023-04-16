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
	p,
	.handle-form__btn {
		width: 100%;
	}
	.handle-form__btn.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	input {
		height: 40px;
		background-color: #ddd;
		font-family: "Montserrat", sans-serif;
	}

	p {
		color: #ff0000;

		font-size: 0.75rem;
		font-family: "Montserrat", sans-serif, sans-serif;
	}

	.handle-form__btn {
		border-radius: 0;

		background-color: #32cd32;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		padding: 1rem;
	}
`;

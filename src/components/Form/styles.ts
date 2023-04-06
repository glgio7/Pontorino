import styled from "styled-components";

export const Form = styled.form`
	width: 100%;

	background-color: #fff;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 2rem;

	gap: 20px;

	position: relative;

	input,
	.handle-form__btn {
		width: 240px;
	}

	input {
		margin-block: 6px;
		height: 40px;
		background-color: #ddd;
	}

	.handle-form__btn {
		border-radius: 0;

		background-color: #32cd32;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		input,
		.handle-form__btn {
			width: 100%;
		}
	}
`;

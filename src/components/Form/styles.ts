import styled from "styled-components";

export const Form = styled.form`
	width: 40%;

	background-color: #fff;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 2rem 2rem;

	gap: 20px;

	position: relative;

	box-shadow: 10px 10px 20px #333;

	input,
	.handle-form {
		width: 100%;
	}

	input {
		margin-block: 6px;
		height: 40px;
		background-color: #ddd;
	}

	.handle-form {
		border-radius: 0;

		background-color: #32cd32;
		color: #fff;
	}

	@media screen and (max-width: 1024px) {
		width: 80%;
	}
`;

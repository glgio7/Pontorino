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

	h2 {
		color: #32cd32;
		margin-top: 12px;
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

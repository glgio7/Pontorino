import styled from "styled-components";

export const Form = styled.form`
	width: 30%;
	height: 60%;

	background-color: #fff;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;

	h2 {
		color: #32cd32;
	}

	input {
		width: 80%;
		margin-block: 6px;
		height: 40px;
		background-color: #ddd;
	}

	.handle-form {
		width: 100%;

		position: absolute;
		bottom: 0;

		border-radius: 0;

		background-color: #32cd32;
		color: #fff;
	}
`;

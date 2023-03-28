import styled from "styled-components";

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	background-color: #f0f0f0;

	width: 100%;
	min-height: calc(100vh - 80px);

	padding: 5rem;
	margin-top: 80px;

	@media screen and (max-width: 900px) {
		flex-direction: column;
		align-items: center;

		padding: 5rem 2rem;
	}
`;

export default StyledContainer;

import styled from "styled-components";

const HeaderContainer = styled.header`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #fff;

	padding: 0 1rem;

	h1 {
		display: inline-flex;
		align-items: center;

		height: 54px;
	}

	.logo {
		width: 42px;
		height: 42px;
		object-fit: cover;
	}

	span {
		font-size: 2rem;
		font-weight: 600;

		color: #68ff00;

		font-weight: normal;
		margin-left: 0.25rem;

		border-radius: 18px;
	}

	nav {
		width: 50%;
	}

	nav ul {
		display: flex;
		justify-content: space-around;
	}

	nav li {
		cursor: pointer;
		transition: all 250ms;

		&::first-letter {
			text-transform: uppercase;
		}

		&:hover {
			color: #68ff00;
		}
	}

	@media screen and (max-width: 768px) {
		justify-content: center;
		flex-wrap: wrap;
		height: auto;
		padding: 1rem;

		h1 {
			width: 100%;
		}

		nav {
			margin-top: 1rem;
			width: 100%;
		}
	}
`;

export default HeaderContainer;

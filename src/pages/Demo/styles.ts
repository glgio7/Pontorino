import styled from "styled-components";

export const Demo = styled.div`
	background-color: #f0f0f0;

	display: flex;

	width: 100%;
	min-height: calc(100vh - 80px);

	nav {
		width: 20vw;
		padding: 2rem;

		background-color: #222;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.list-item__btn {
		width: 240px;

		margin: 6px 0;
	}

	.logo {
		height: 24px;
		object-fit: contain;
	}

	span {
		font-size: 0.8rem;
		color: #fff;
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #333;

	padding: 0 2rem;

	position: relative;

	h1 {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 54px;
		width: 240px;
	}

	.logo {
		object-fit: contain;
		height: 36px;
	}

	.user__btn {
		color: #32cd32;
		background: #fff;

		width: 240px;
	}
`;

export const Container = styled.section`
	width: 100%;
	background-image: url("/img/demo-banner.jpg");
	background-size: contain;
	background-position: center;
`;

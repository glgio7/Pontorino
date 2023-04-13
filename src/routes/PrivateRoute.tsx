import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../pages/Login";

interface PrivateProps {
	children: React.ReactNode;
}

const Private = ({ children }: PrivateProps) => {
	const { authenticated } = useContext(AuthContext);

	if (!authenticated) return <Login />;

	return <>{children}</>;
};

export default Private;

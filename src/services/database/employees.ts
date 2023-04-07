import { db } from "../config";
import { doc, getDoc } from "firebase/firestore";

const checkEmployees = async (userCode: string) => {
	try {
		const docRef = doc(db, "employees", userCode);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		console.error("Error adding/updating document: ", err);
	}
};

export default checkEmployees;

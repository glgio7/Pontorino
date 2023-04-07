import { db } from "../../services/config";
import { doc, getDoc } from "firebase/firestore";

const checkEmployees = async (userCode: string) => {
	try {
		const docRef = doc(db, "employees", userCode);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists() || docRef) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		console.error("Error adding/updating document: ", err);
	}
};

export default checkEmployees;

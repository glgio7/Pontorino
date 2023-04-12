import { db } from "../config";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";

export const verifyEmployees = async (userCode: string) => {
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

export const listEmployees = async () => {
	const querySnapshot = await getDocs(collection(db, "employees"));
	const employeesArr = querySnapshot.docs.map((doc) => {
		return doc.data();
	});
	return employeesArr;
};

import { db } from "../../services/config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { verifyEmployees } from "../database/employees";

export interface FormData {
	name: string;
	code: string;
	pin: string;
	registers: { [key: string]: string };
}

const handleTimeClock = async (
	name: string,
	userCode: string,
	userPin: string,
	currentDate: string,
	currentTime: string
) => {
	const formData: FormData = {
		name: name,
		code: userCode,
		pin: userPin,
		registers: { [currentDate]: currentTime },
	};
	const success = await verifyEmployees(userCode);

	try {
		const docRef = doc(db, "employees", userCode);

		if (success) {
			await updateDoc(docRef, {
				registers: arrayUnion(formData.registers),
			});
			window.alert("Done.");
		} else {
			window.alert("Not authorized.");
		}
	} catch (err) {
		console.error("Error updating document: ", err);
	}
};

export default handleTimeClock;

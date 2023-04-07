import { db } from "../../services/config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import checkEmployees from "../database/employees";

export interface FormData {
	code: string;
	pin: string;
	registers: { [key: string]: string };
}

const handleTimeClock = async (
	userCode: string,
	userPin: string,
	currentDate: string,
	currentTime: string
) => {
	const formData: FormData = {
		code: userCode,
		pin: userPin,
		registers: { [currentDate]: currentTime },
	};
	const success = await checkEmployees(userCode);

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

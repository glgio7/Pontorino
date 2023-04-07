import { db } from "../../services/config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import checkEmployees from "../database/checkEmployees";

export interface FormData {
	code: string;
	pin: number;
	registers: { [key: string]: string };
}

const handleTimeClock = async (
	userCode: string,
	userPin: number,
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
		}
	} catch (err) {
		console.error("Error updating document: ", err);
		window.alert("Não autorizado.");
	}
};

export default handleTimeClock;

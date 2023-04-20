import { db } from "../../services/config";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { verifyEmployees } from "../database/employees";
import { FormData } from "./types";

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
	const success = await verifyEmployees(userCode);
	const docRef = doc(db, "employees", userCode);
	const docSnap = await getDoc(docRef);
	const employeeData = docSnap.data();

	if (success && employeeData) {
		try {
			if (employeeData.pin === userPin) {
				await updateDoc(docRef, {
					registers: arrayUnion(formData.registers),
				});
				window.alert("Done.");
			} else {
				window.alert("Not authorized.");
			}
		} catch (err) {
			alert("Algum erro aconteceu");
			console.error("Error updating document: ", err);
		}
	}
};

export default handleTimeClock;
